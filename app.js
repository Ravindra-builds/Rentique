if(process.env.NODE_ENV != "production"){
  require("dotenv").config();
}
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");
const path = require("path");
const methodOverride = require("method-override");
const listingsRouter = require("./routes/listing.js");
const reviewsRouter = require("./routes/review.js");
const session = require("express-session");
const MongoStore = require("connect-mongo").default;

const flash = require("connect-flash");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
const passport=require("passport");
const LocalStrategy=require("passport-local");
const User=require("./models/user.js");
const userRouter=require("./routes/user.js");
const Listing=require("./models/listings");
const wrapAsync=require("./utils/wrapAsync.js");
const ExpressError=require("./utils/ExpressError.js");

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));


const DBUrl=process.env.ATLASDB_URL;
main().catch((err) => console.log(err));
async function main() {
   try {
    await mongoose.connect(DBUrl);
    console.log("Database connected");
  } catch (err) {
    console.error("DB connection failed:", err);
  }
}
const mySecret=process.env.SECRET;
// const ADMIN_ID=process.env.ADMIN_ID;

const store = MongoStore.create({
  mongoUrl: DBUrl,
  crypto: {
    secret: mySecret,
  },
  touchAfter: 24 * 3600,
});

store.on('error', (error) => {
  console.log("Session store error:", error);
});


const sessionOptions = {
    store,
  secret:mySecret,
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};
app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser=req.user;
  res.locals.adminId=process.env.ADMIN_ID;
  next();
});

app.get("/",(req,res)=>{
  res.redirect("/listings");
})
// routes
app.use("/listings", listingsRouter);
app.use("/listings/:id/reviews", reviewsRouter);
app.use("/",userRouter);

app.get("/search", wrapAsync(async (req, res) => {
  const query = String(req.query.search || "").trim().slice(0, 100);
  if (!query) {
    return res.redirect("/listings");
  }
  // escape regex special characters so user input is matched literally
  const pattern = new RegExp(query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");

  const listings = await Listing.find({
    $or: [
      { title: pattern },
      { location: pattern },
      { country: pattern }
    ]
  });

  res.render("./listings/index.ejs", { listings, query, pageTitle: `Search: ${query}` });
}));

// 404 for any unknown route
app.use((req, res, next) => {
  next(new ExpressError(404, "The page you’re looking for doesn’t exist or may have been moved."));
});

// Error handling middleware

app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  // invalid MongoDB ids (e.g. /listings/abc) should be a 404, not a crash
  if (err.name === "CastError") {
    err = new ExpressError(404, "We couldn’t find that listing.");
  }
  let { status = 500, message = "Something went wrong!" } = err;
  if (status >= 500) {
    console.error(err);
    message = "Something went wrong on our side. Please try again in a moment.";
  }
  res.status(status).render("error.ejs", { message, status, pageTitle: "Error" });
});

const port=process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
