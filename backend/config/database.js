const mongoose = require("mongoose");
const { MONGO_URI_PROD, MONGO_URI_DEV, NODE_ENV } = process.env;
const MONGO_URI = NODE_ENV === "development" ? MONGO_URI_DEV : MONGO_URI_PROD;

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
