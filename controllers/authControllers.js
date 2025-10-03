//REGISTER
const userModel = require("../models/userModel");

const registerController = async (req, res) => {
  try {
    const { username, email, password, address, phone } = req.body;
    //Validation
    if (!username || !email || !password || !address || !phone) {
      res.status(500).send({
        success: false,
        message: "All fields required",
      });
    }

    // Existing email
    const existing = await userModel.findOne({ email });
    if (existing) {
      res.status(500).send({
        success: false,
        message: "This email already exist",
      });
    }

    //Create new user
    const user = await userModel.create({
      username,
      email,
      password,
      address,
      phone,
    });
    res.status(200).send({
      success: true,
      message: "Account creation sucess",
    });
  } catch (error) {
    console.log("Cannot fetch data", error);
  }
};


// LOGIN
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(500).send({
        success: false,
        message: "Email or password cant be empty",
      });
    }

    const user = await userModel.findOne({ email: email, password: password });

    if (!user) {
      res.status(500).send({
        success: false,
        message: "Mismatch email and password",
      });
    }
    res.status(200).send({
      success: true,
      message: "Login sucess",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error,
    });
    console.log(error);
  }
};
module.exports = { loginController, registerController };
