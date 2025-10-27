import Task from "../models/taskModel.js";

// Create a new task
export const createTask = async (req, res) => {
  try {
    const { title, description, priority, dueDate, completed } = req.body;
    const task = new Task({
      title,
      description,
      priority,
      dueDate,
      completed: completed === "Yes" || completed === true,
      owner: req.user._id,
    });
    const saved = await task.save();
    res.status(201).json({
      success: true,
      message: "Task created successfully",
      task: saved,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

//get all tasks for a logged in user
export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ owner: req.user._id }).sort({
      createdAt: -1,
    });
    res.status(200).json({ success: true, tasks });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
// Get a single task by ID(must belong to the logged-in user)
export const getTaskById = async (req, res) => {
  try {
    const task = await Task.findOne({
      _id: req.params.id,
      owner: req.user._id,
    });
    if (!task) {
      return res
        .status(404)
        .json({ success: false, message: "Task not found" });
    }
    res.status(200).json({ success: true, task });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update a task by ID (must belong to the logged-in user)
export const updateTask = async (req, res) => {
  try {
    const data = { ...req.body };
    if (data.completed !== undefined) {
      data.completed = data.completed === "Yes" || data.completed === true;
    }
    const Updated = await Task.findOneAndUpdate(
      { _id: req.params.id, owner: req.user._id },
      data,
      { new: true }
    );
    if (!Updated) {
      return res
        .status(404)
        .json({ success: false, message: "Task not found or not authorized" });
    }
    res.status(200).json({
      success: true,
      message: "Task updated successfully",
      task: Updated,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
// Delete a task by ID
export const deleteTask = async (req, res) => {
  try {
    const deleted = await Task.findOneAndDelete({
      _id: req.params.id,
      owner: req.user._id,
    });
    if (!deleted) {
      return res
        .status(404)
        .json({ success: false, message: "Task not found or not authorized" });
    }
    res
      .status(200)
      .json({ success: true, message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
