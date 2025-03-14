const express = require("express");
const router = express.Router();
const {
  getPeople,
  postPerson,
  putPerson,
  deletePerson,
} = require("../controllers/people");

router.get("/", getPeople);

router.post("/", postPerson);

router.put("/:id", putPerson);

router.delete("/:id", deletePerson);

module.exports = router;
