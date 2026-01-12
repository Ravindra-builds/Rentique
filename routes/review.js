const express=require("express");
const router=express.Router({mergeParams:true});
const {isLoggedIn,validateReview,isAuthor}=require("../middleware.js");
const reviewController=require("../controller/review.js");


// review routes

//review post route
router.post("/",isLoggedIn,validateReview,reviewController.createNewReview);

//review delete route
router.delete("/:reviewId",isLoggedIn,isAuthor,reviewController.deleteReview);

module.exports=router;