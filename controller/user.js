const User = require("../models/user.js");

module.exports.renderSignupForm= async (req, res) => {
  res.render("./user/signup.ejs",{pageTitle:"Sign up"});
}

module.exports.signup=async (req, res, next) => {
  try {
    let { username, email, password } = req.body;
    const newUser = new User({ username, email });
    let registeredUser=await User.register(newUser, password);
    req.login(registeredUser,(err)=>{
      if(err)
        return next(err);
      req.flash("success", "Welcome to Rentique");
      res.redirect("/listings");
    });
  } catch (e) {
    // duplicate email comes back as a raw MongoDB error, so give it a readable message
    req.flash("error", e.code === 11000 ? "An account with that email already exists." : e.message);
    res.redirect("/signup");
  }
}

module.exports.renderLoginForm= (req, res) => {
  res.render("./user/login.ejs",{pageTitle:"Log in"});
}

module.exports.login=async (req, res) => {
  req.flash("success", "Welcome back! to Rentique!");
  let redirectUrl=res.locals.redirectUrl || "/listings";
  res.redirect(redirectUrl);
}

module.exports.logout=(req,res,next)=>{
  req.logout((err)=>{
    if(err)
       return next(err);
  req.flash("success","You are logged out!");
  res.redirect("/listings");
});
}