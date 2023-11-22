const mongoose = require("mongoose");

// if (process.env.NODE_ENV != "production") {
//   require("dotenv").config();
// }

async function connectToDb() {
  try {
    await mongoose.connect("<>");
    console.log("CONNECTED");
  } catch (err) {
    console.log(err);
  }
}

module.exports = connectToDb;
