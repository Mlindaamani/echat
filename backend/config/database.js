const mongoose = require("mongoose");

const MONGO_URI =
  process.env.NODE_ENV === "development"
    ? process.env.MONGO_URI_DEV
    : process.env.MONGO_URI_PROD;

console.log(MONGO_URI);

const connnectToMongoDb = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI);
    console.log(
      `✔️  Success! Mongodb is running on port: ${conn.connection.port}`
    );
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = { connnectToMongoDb };
