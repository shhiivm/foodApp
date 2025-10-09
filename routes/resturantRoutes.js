const express = require("express");
const {
  createResturantController,
  getAllResturantController,
  getResturantByIdController,
  deleteResturantController,
} = require("../controllers/restoControllers");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

//Create Resturants
router.post("/create", authMiddleware, createResturantController);

//Get all resturants
router.get("/getAll", getAllResturantController);

//GET RESTURANTS BY ID
router.get("/getById/:id", getResturantByIdController);

//DELETE RESTURANTS
router.delete("/delete/:id", authMiddleware, deleteResturantController);

module.exports = router;
