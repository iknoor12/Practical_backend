const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello, server is running!");
});

app.get("/about", (req, res) => {
    res.send('This is about page');
});

app.get("/contact", (req, res) => {
    res.send('This is contact page');
});

app.listen(port, () => {
    console.log('server is running on port', port);
});