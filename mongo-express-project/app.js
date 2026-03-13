const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

const PORT = 3000;

const userRoutes = require("./routes/userRoutes");

app.use("/api", userRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/mydatabase")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.listen(PORT, () => {
  console.log("Server running on port 3000");
});
