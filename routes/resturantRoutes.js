const express = require("express");
const createResturantController = require("../controllers/restoControllers");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/create", authMiddleware, createResturantController);

module.exports = router;
