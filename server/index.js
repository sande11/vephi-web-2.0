const express = require("express");
const cors = require("cors");
require("dotenv").config();
const bodyPaser = require("body-parser");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes); // Register routes

const PORT = process.env.PORT || 5000;
app.listen(5000, () => {
  console.log(`Server running on port ${PORT}`);
});
