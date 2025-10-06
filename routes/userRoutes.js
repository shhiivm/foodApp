const express = require("express");
const {
  getUserController,
  updateUserController,
  updatePasswordController,
  resetPasswordController,
} = require("../controllers/userControllers");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

// GET USER
router.get("/getUser", authMiddleware, getUserController);

//UPDATE USER
router.put("/updateUser", authMiddleware, updateUserController);

//UPDATE PASSWORD
router.put("/updatePassword", authMiddleware, updatePasswordController);

//RESET PASSWORD
router.post("/resetPassword", resetPasswordController);

module.exports = router;
