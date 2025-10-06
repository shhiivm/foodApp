const express = require("express");
const colors = require("colors");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const dbconfig = require("./config/dbconfig");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

//DB connection
dbconfig();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/user", require("./routes/userRoutes"));

app.get("/", (req, res) => {
  return res.status(200).send("<h1>Welcome to food App</h1> ");
});

app.listen(PORT, () => {
  console.log(`Server is live on PORT ${PORT}`);
});
