const express = require("express");
const {
  createResturantController,
  getAllResturantController,
  getResturantByIdController,
} = require("../controllers/restoControllers");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

//Create Resturants
router.post("/create", authMiddleware, createResturantController);

//Get all resturants
router.get("/getAll", getAllResturantController);

router.get("/getById/:id", getResturantByIdController);
module.exports = router;
