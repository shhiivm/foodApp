const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).send({
        success: false,
        message: "Authorization header missing or malformed",
      });
    }
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        return res.status(401).send({
          success: false,
          message: "Unauthorized user",
        });
      }
      req.user = decode;
      next();
    });
  } catch (error) {
    console.log(`Something went wrong ${error}`);
    res.status(500).send({
      success: false,
      message: "Error in Auth API",
      error,
    });
  }
};
