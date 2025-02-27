const mongoose = require("mongoose");

const connnectToMongoDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `✔️  Success! Mongodb is running on port: ${conn.connection.port}`
    );
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = { connnectToMongoDb };
