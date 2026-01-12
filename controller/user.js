const User = require("../models/user.js");

module.exports.renderSignupForm= async (req, res) => {
  res.render("./user/signup.ejs");
}

module.exports.signup=async (req, res) => {
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
    req.flash("error", e.message);
    res.redirect("/signup");
  }
}

module.exports.renderLoginForm= (req, res) => {
  res.render("./user/login.ejs");
}

module.exports.login=async (req, res) => {
  req.flash("success", "Welcome back! to Rentique!");
  let redirectUrl=res.locals.redirectUrl || "/listings";
  res.redirect(redirectUrl);
}

module.exports.logout=(req,res)=>{
  req.logout((err)=>{
    if(err)
       return next(err);
  req.flash("success","You are logged out!");
  res.redirect("/listings");
});
}