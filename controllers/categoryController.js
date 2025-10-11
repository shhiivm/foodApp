const categoryModel = require("../models/categoryModel");

const createCategoryController = async (req, res) => {
  try {
    const { title, imageUrl } = req.body;
    if (!title) {
      return res.status(404).send({
        success: false,
        message: "Title cannot be empty",
      });
    }

    const newCategory = new categoryModel({ title, imageUrl });
    await newCategory.save();
    res.status(200).send({
      success: true,
      message: "category created",
      newCategory,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in create Category API ",
      error,
    });
  }
};

module.exports = createCategoryController;
