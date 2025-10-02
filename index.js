const express = require("express");
const colors = require("colors");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  return res.status(200).send("<h1>Welcome to food App</h1> ");
});

app.listen(PORT, () => {
  console.log(`Server is live on PORT ${PORT}`);
});
