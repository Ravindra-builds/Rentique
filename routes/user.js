const express = require("express");
const router = express.Router();
const passport = require("passport");
const {saveRedirectUrl}=require("../middleware.js");
const userController=require("../controller/user.js");

//signUp route

router.route("/signup")
 .get(userController.renderSignupForm)
.post( userController.signup);

//Login Route
const authenticate = passport.authenticate("local", {
  failureRedirect: "/login",
  failureFlash: true,
});
router.route("/login")
  .get(userController.renderLoginForm)
  .post(saveRedirectUrl, authenticate, userController.login);

//logout route
router.get("/logout",userController.logout);

module.exports = router;
