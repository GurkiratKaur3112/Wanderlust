require("dotenv").config();
const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const User = require("../models/user.js");

// Function to convert $oid objects to ObjectId
const convertOids = (data) => {
  return data.map(item => {
    const converted = { ...item };
    if (item._id && item._id.$oid) {
      converted._id = new mongoose.Types.ObjectId(item._id.$oid);
    }
    if (item.owner && item.owner.$oid) {
      converted.owner = new mongoose.Types.ObjectId(item.owner.$oid);
    }
    if (item.reviews && Array.isArray(item.reviews)) {
      converted.reviews = item.reviews.map(review => 
        review.$oid ? new mongoose.Types.ObjectId(review.$oid) : review
      );
    }
    return converted;
  });
};

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  try {
    // Create test user if it doesn't exist
    const testUser = await User.findOne({ _id: "66567b03fda820235197b582" });
    if (!testUser) {
      const newUser = new User({
        _id: new mongoose.Types.ObjectId("66567b03fda820235197b582"),
        username: "testuser",
        email: "test@example.com"
      });
      await newUser.save();
      console.log("Test user created");
    }

    await Listing.deleteMany({});

    const updatedData = convertOids(initData.data).map(listing => ({
      ...listing,
      owner: new mongoose.Types.ObjectId("66567b03fda820235197b582")
    }));

    await Listing.insertMany(updatedData);
    console.log("DB is initialized");
  } catch (error) {
    console.error("Error initializing DB:", error);
  }
};

initDB();


