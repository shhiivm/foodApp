const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");

const getUserController = async (req, res) => {
  try {
    //find user
    const getId = req.user.id;
    const getUser = await userModel.findById({ _id: getId });

    //Validation
    if (!getUser) {
      return res.status(404).send({
        message: "cannot find user",
        success: false,
      });
    }
    //User found
    else {
      return res.status(200).send({
        success: true,
        message: "User data found successfully",
        getUser,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in get user Api",
      error,
    });
  }
};

//Update USer

const updateUserController = async (req, res) => {
  try {
    const user = await userModel.findById({ _id: req.user.id });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }

    const { username, address, phone } = req.body;
    if (username) user.username = username;
    if (address) user.address = address;
    if (phone) user.phone = phone;
    await user.save();
    return res.status(200).send({
      success: true,
      message: "user updated",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in update user API",
      error,
    });
  }
};

// Update Password

const updatePasswordController = async (req, res) => {
  try {
    const user = await userModel.findById({ _id: req.user.id });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "user not found",
      });
    }
    const { oldPass, newPass } = req.body;
    if (!oldPass || !newPass) {
      return res.status(500).send({
        success: false,
        message: "Please provoide password",
      });
    }
    const isMatch = await bcrypt.compare(oldPass, user.password);
    if (!isMatch) {
      return res.status(500).send({
        success: false,
        message: "invalid old password",
      });
    }
    user.password = newPass;
    const hashPassword = await bcrypt.hash(newPass, 10);
    user.password = hashPassword;
    await user.save();
    return res.status(200).send({
      success: true,
      message: "Password updated sucessfully!",
    });
  } catch (error) {
    console.log(error);
    res.status(501).send({
      success: false,
      message: "Error while updating password API",
      error,
    });
  }
};

module.exports = {
  getUserController,
  updateUserController,
  updatePasswordController,
};
