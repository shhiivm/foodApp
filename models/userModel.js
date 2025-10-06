const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: Array,
    },
    phone: {
      type: String,
      require: [true, "phone number is required"],
    },
    usertype: {
      type: String,
      default: "client",
      enums: ["client", "admin", "vendor", "driver"],
    },
    profile: {
      type: String,
      default:
        "https://cdn.pixabay.com/photo/2025/08/28/11/47/user-9801866_1280.png",
    },
    answer: {
      type: String,
      require: [true, "Answer is required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);
