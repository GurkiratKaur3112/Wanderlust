const mongoose = require("mongoose");
const User = require("./models/user.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

async function main() {
  await mongoose.connect(MONGO_URL);
  console.log("Connected to DB");
  
  const userId = "66567b03fda820235197b582";
  const user = await User.findById(userId);
  
  if (user) {
    console.log("User found:", user);
  } else {
    console.log("User not found");
  }
  
  await mongoose.disconnect();
}

main().catch(err => console.error(err));
