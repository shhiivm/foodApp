const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");

// Registration

const registerController = async (req, res) => {
  try {
    const { username, email, password, address, phone } = req.body;
    if (!username || !email || !password || !address || !phone) {
      return res
        .status(400)
        .send({ success: false, message: "All fields required" });
    }

    const existing = await userModel.findOne({ email });
    if (existing) {
      return res
        .status(409)
        .send({ success: false, message: "Email already exists" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
      username,
      email,
      password: hashPassword,
      address,
      phone,
    });

    return res.status(201).send({
      success: true,
      message: `${user.username} Your Account has created successfully`,
    });
  } catch (error) {
    console.log("Cannot fetch data", error);
    return res
      .status(500)
      .send({ success: false, message: "Reg Internal Server Error" });
  }
};

// Login
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .send({ success: false, message: "Email or password can't be empty" });
    }

    const user = await userModel.findOne({ email: email });

    if (!user) {
      return res
        .status(401)
        .send({ success: false, message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .send({ success: false, message: "Invalid email or password" });
    }

    return res
      .status(200)
      .send({
        success: true,
        message: `Login success! Welcome back ${user.username}`,
      });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ success: false, message: "Log Internal Server Error" });
  }
};

module.exports = { loginController, registerController };
