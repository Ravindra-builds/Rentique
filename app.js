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
const mongoStore=require("connect-mongo");
const flash = require("connect-flash");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
const passport=require("passport");
const LocalStategy=require("passport-local");
const User=require("./models/user.js");
const userRouter=require("./routes/user.js");
const Listing=require("./models/listings");

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

const DBUrl=process.env.ATLASDB_URL;
main().catch((err) => console.log(err));
async function main() {
  mongoose.connect(DBUrl);
  console.log("Database connected");
}
const mySecret=process.env.SECRET;

const store=mongoStore.create({
  mongoUrl:DBUrl,
  crypto:{
    secret:mySecret
  },
  touchAfter:24*3600,
})

const sessionOptions = {
  store,
  secret:mySecret,
  resave: false,
  saveUninitialized: true,
  cookie: {
    expire: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};
app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser=req.user;
  next();
});


// routes
app.use("/listings", listingsRouter);
app.use("/listings/:id/reviews", reviewsRouter);
app.use("/",userRouter);

app.get("/search", async (req, res) => {
  const { search } = req.query;

  const listings = await Listing.find({
    $or: [
      { title: { $regex: search, $options: "i" } },
      { location: { $regex: search, $options: "i" } }
    ]
  });
  if(listings.length==0){
    req.flash("error","Not found any destination");
    return res.redirect("/listings");
  }

  res.render("./listings/index.ejs",{listings});
});


// Error handling middleware

app.use((err, req, res, next) => {
  let { status = 500, message = "Something went wrong!" } = err;
  res.status(status).render("error.ejs", { message });
});

const port=process.env.PORT;
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
