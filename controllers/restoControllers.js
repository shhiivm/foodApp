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

//GET ALL RESTURANT
const getAllResturantController = async (req, res) => {
  try {
    const resturants = await resturantModel.find({});
    if (!resturants) {
      return res.status(404).send({
        success: false,
        message: "Cannot find resturant",
      });
    }
    res.status(200).send({
      success: true,
      totalcCount: resturants.length,
      resturants,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error in get All Resturant API",
      error,
    });
  }
};

//GET RESTURANT BY ID
const getResturantByIdController = async (req, res) => {
  try {
    const resturantId = req.params.id;
    if (!resturantId) {
      return res.status(404).send({
        success: false,
        message: "Please provide resturant id",
      });
    }

    const resturant = await resturantModel.findById(resturantId);

    if (!resturant) {
      return res.status(404).send({
        success: false,
        message: "Cannot find resturant",
      });
    }
    res.status(200).send({
      success: true,
      message: "resturant found",
      resturant,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error in getting resturant Id API",
      error,
    });
  }
};

//Delete RESTURANT
const deleteResturantController = async (req, res) => {
  try {
    const resturantId = req.params.id;

    const resturant = await resturantModel.findByIdAndDelete(resturantId);

    if (!resturant) {
      return res.status(404).send({
        success: false,
        message: "Cannoy find resturant",
      });
    }
    res.status(200).send({
      success: true,
      message: "Resturant deleted",
      resturant,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "cannod find resturant id API",
      error,
    });
  }
};
module.exports = {
  createResturantController,
  getAllResturantController,
  getResturantByIdController,
  deleteResturantController,
};
