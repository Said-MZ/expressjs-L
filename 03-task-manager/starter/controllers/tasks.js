const Task = require("../db/models/task");
const asyncWrapper = require("../middleware/async-wrapper");

const getTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find();
  res.status(201).json({ tasks });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const getTask = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  if (!task) {
    return res.status(404).json({ msg: "not found" });
  }
  res.status(200).json({ task });
});

const updateTask = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const updatedTask = await Task.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!updatedTask) {
    return res.status(404).json({ msg: "not found" });
  }
  res.status(200).json({ updatedTask });
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const task = await Task.findByIdAndDelete(id);
  if (!task) {
    return res.status(404).json({ msg: "not found" });
  }
  res.status(200).json(task);
});

module.exports = {
  getTasks,
  getTask,
  updateTask,
  deleteTask,
  createTask,
};
