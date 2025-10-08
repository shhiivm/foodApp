const resturantModel = require("../models/resturantModel");
// const userModel = require("../models/userModel");
const createResturantController = async (req, res) => {
  try {
    const {
      title,
      imageUrl,
      foods,
      time,
      pickup,
      delivery,
      isOpen,
      logoUrl,
      rating,
      ratingCount,
      code,
      coords,
    } = req.body;

    if (!title || !coords) {
      return res.status(500).send({
        success: false,
        message: "Title and Address is needed",
      });
    }
    const resturant = await resturantModel.create({
      title,
      imageUrl,
      foods,
      time,
      pickup,
      delivery,
      isOpen,
      logoUrl,
      rating,
      ratingCount,
      code,
      coords,
    });
    res.send(
      `Congratulations you have successfully added your resturant "${resturant.title}" to Zumbatoe`
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = createResturantController;
