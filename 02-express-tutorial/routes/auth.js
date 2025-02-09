const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { name } = req.body;
  if (name) {
    res.status(200).send(`${name}, was sent`);
  }
  res.status(401).send("please provide credentials");
});

module.exports = router;
