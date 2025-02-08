const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");
const morgan = require("morgan");
// app.use(morgan("common")); // 3rd party
// app.use([logger, authorize]); // custom

app.get("/", (req, res) => {
  res.send("hi");
});

app.get("/about", (req, res) => {
  res.send("hi from about");
});

app.get("/items", (req, res) => {
  res.send("hi from items");
});

app.listen(5001, () => {
  console.log("Listening to port 5001");
});
