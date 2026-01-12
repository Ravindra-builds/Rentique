const mongoose = require("mongoose");
const Review=require("./reviews.js")
const User=require("./user.js");

const listingSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true  
    },
    price:{
        type: Number,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    imageUrl:{  
        type: String,
        default:"https://images.unsplash.com/photo-1721815693498-cc28507c0ba2?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    country:{
        type: String,
        default: "India"
    },
    reviews:[
        {
            type:mongoose.Schema.Types.ObjectId, ref:"Review",
        }
    ],
    owner:{
        type:mongoose.Schema.Types.ObjectId,ref:"User",
    },
geometry: {
    type: {
      type: String,
      enum: ["Point"],
      required: true
    },
    coordinates: {
      type: [Number], // [lng, lat]
      required: true
    }
}
});
listingSchema.index({ geometry: "2dsphere" });
 listingSchema.post("findOneAndDelete",async function(listing){
    if(listing){
        await Review.deleteMany({
            _id: {
                $in: listing.reviews
            }
        });
    }
}); 

const Listing = mongoose.model('Listing', listingSchema);
module.exports = Listing;