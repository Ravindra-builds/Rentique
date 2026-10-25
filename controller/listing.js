const Listing=require("../models/listings");
const wrapAsync=require("../utils/wrapAsync.js");
const geocode=require("../utils/geocode.js")

module.exports.getAllListings=wrapAsync(async (req, res) => {
   let listings= await Listing.find({});
   res.render("./listings/index.ejs",{listings});
 })

 module.exports.renderNewForm=wrapAsync(async(req, res) => {  
    const count=await Listing.countDocuments({owner:req.user._id});
    if(count>=2){
        req.flash("error","Listing limit reached,You can only create two listings.");
        return res.redirect("/listings");
    } 
    res.render("./listings/new.ejs",{pageTitle:"List your place"});
})

module.exports.createNewListing=wrapAsync(async (req, res) => { 
       const count=await Listing.countDocuments({owner:req.user._id});
    if(count>=2){
        req.flash("error","Listing limit reached,You can only create two listings.");
        return res.redirect("/listings");
    }   
    if(!req.body.listing.imageUrl){
        delete req.body.listing.imageUrl; // let the schema default photo apply
    }
    const newListing=new Listing(req.body.listing);
    newListing.owner=req.user._id;
    // console.log(newListing);
    let geometry = null;
try {
  geometry = await geocode(req.body.listing.location);
}catch{
  geometry = {
    type: "Point",
    coordinates: [0, 0]
  };
};
// console.log(geometry);
newListing.geometry = geometry;

    await newListing.save();
    req.flash("success","New listing created!");
    res.redirect("/listings");
})

module.exports.showListing=wrapAsync(async (req, res) => {   
    const {id}=req.params;
    let listing= await Listing.findById(id).populate({path:"reviews"
        ,populate:{
            path:"author",
        }
    }).populate("owner");
    if(!listing){
        req.flash("error","Listing not found!");
        return res.redirect("/listings");
    }
    // console.log(listing);
    res.render("./listings/show.ejs",{listing,pageTitle:listing.title});
})

module.exports.editListing=wrapAsync(async (req, res) => {
    const {id}=req.params;
    let listing= await Listing.findById(id);
    if(!listing){
        req.flash("error","Listing not found!");
        return res.redirect("/listings");
    }
    res.render("./listings/edit.ejs",{listing,pageTitle:"Edit listing"});
})

module.exports.updateListing=wrapAsync(async (req, res) => {
    const {id}=req.params;
    const update={...req.body.listing};
    if(!update.imageUrl){
        delete update.imageUrl; // keep the current photo
    }
    let listing= await Listing.findById(id);
    // re-geocode only when the location actually changed
    if(update.location && update.location!==listing.location){
        try{
            update.geometry=await geocode(update.location);
        }catch{
            update.geometry={ type:"Point", coordinates:[0,0] };
        }
    }
    await Listing.findByIdAndUpdate(id,update,{runValidators:true});
    req.flash("success","Listing Updated!");
    res.redirect("/listings/"+id);
})

module.exports.deleteListing=wrapAsync(async (req, res) => {
    const {id}=req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success","Listing Deleted!");
    res.redirect("/listings");
})