const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const User = require("./models/user.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

async function main() {
  await mongoose.connect(MONGO_URL);
  console.log("Connected to DB");
  
  const listings = await Listing.find().populate("owner");
  
  listings.forEach(listing => {
    console.log("Listing:", listing.title);
    console.log("Owner:", listing.owner ? listing.owner.username : "No owner");
    console.log("-------------------");
  });
  
  await mongoose.disconnect();
}

main().catch(err => console.error(err));
