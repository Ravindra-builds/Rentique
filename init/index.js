// Seeds the database with sample listings.
// Usage: npm run seed   (reads ATLASDB_URL and SEED_OWNER_ID from .env)
require("dotenv").config();
const mongoose = require('mongoose');
const Listing = require('../models/listings.js');
const sampleData = require("./data.js");

const DBUrl = process.env.ATLASDB_URL || 'mongodb://127.0.0.1:27017/rentique';
const ownerId = process.env.SEED_OWNER_ID;

async function main() {
    if (!ownerId) {
        console.error("Set SEED_OWNER_ID in .env to the _id of an existing user (sign up first, then copy your user id).");
        process.exit(1);
    }
    await mongoose.connect(DBUrl);
    console.log("Database connected");

    const data = sampleData.map((obj) => ({ ...obj, owner: ownerId }));
    await Listing.insertMany(data);
    console.log(`Inserted ${data.length} sample listings`);
}

main()
    .catch((error) => console.error("Error seeding data: ", error))
    .finally(() => mongoose.disconnect());
