// console.log("Hello World");
const express = require("express");

const app = express();

// Middleware to read JSON data
app.use(express.json());

/* -------- ROUTES -------- */

// Home Route
app.get("/", (req, res) => {
  res.send("Welcome to my server");
});

// About Route
app.get("/about", (req, res) => {
  res.send("This is About Page");
});

// Contact Route (send JSON)
app.get("/contact", (req, res) => {
  res.json({
    email: "contact@example.com",
    phone: "1234567890"
  });
});


/* -------- POST ROUTE -------- */

app.get("/login", (req, res) => {

//   const { username, password } = req.body;

  res.json({
    message: "Data received successfully",
    username: "inknoor",
    password: "123456"
  });

});


// Start Server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});