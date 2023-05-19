const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const uri = process.env.mongodb;
const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log("successfully connected database");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connect;