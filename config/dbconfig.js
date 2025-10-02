const mongoose = require("mongoose");

module.exports = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected to DB ${mongoose.connection.host}`);
  } catch (err) {
    console.log(`DB connection failed`, err);
  }
};
