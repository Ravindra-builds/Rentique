const mongoose = require('mongoose');
const Listing = require('../models/listings.js');   
const sampleData =require("./data.js")

main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/rentique');
    console.log("Database connected");
}
const data=sampleData.map((obj)=>({...obj,owner:'696119e48d903b16c836aefc'}));
Listing.insertMany(data)
    .then(() => {
        console.log("Data inserted successfully");
    })
    .catch((error) => {
        console.error("Error inserting data: ", error);
    });