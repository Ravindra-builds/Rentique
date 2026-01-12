const express=require("express");
const router=express.Router();
const Listing = require('../models/listings.js');
const {isLoggedIn,isOwner,validateListing}=require("../middleware.js");
const listingController=require("../controller/listing.js");


//listings routes

router.route("/")
 .get(listingController.getAllListings)
 .post(validateListing,listingController.createNewListing);

 //new route
 router.get("/new",isLoggedIn,listingController.renderNewForm);
 
 router.route("/:id")
  .get(listingController.showListing)
  .put(isLoggedIn,isOwner,validateListing,listingController.updateListing)
  .delete(isLoggedIn,isOwner,listingController.deleteListing);

//edit route
router.get("/:id/edit",isLoggedIn,isOwner,listingController.editListing);

module.exports=router;