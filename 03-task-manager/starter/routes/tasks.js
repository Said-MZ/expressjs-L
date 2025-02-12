const express = require("express");
const router = express.Router();
const {
  getTasks,
  getTask,
  updateTask,
  deleteTask,
  createTask,
} = require("../controllers/tasks");

router.get("/", getTasks);
router.post("/", createTask);
router.get("/:id", getTask);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
