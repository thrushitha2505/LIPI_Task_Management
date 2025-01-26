const { Task } = require('../models/taskModel');

exports.createTask = async (req, res) => {
  try {
    const { title, description, due_date } = req.body;
    const task = await Task.create({
      title,
      description,
      due_date: due_date || new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    });
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    const updatedTasks = tasks.map((task) => {
      const now = new Date();
      if (task.status !== 'Completed') {
        if (new Date(task.due_date) < now) {
          task.status = 'Overdue';
        } else if (new Date(task.due_date).toDateString() === now.toDateString()) {
          task.status = 'Due Today';
        } else {
          task.status = 'Pending';
        }
      }
      return task;
    });
    res.status(200).json(updatedTasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByPk(id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    const updatedFields = req.body;
    for (const key in updatedFields) {
      task[key] = updatedFields[key];
    }
    await task.save();
    res.status(200).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.completeTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByPk(id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    task.status = 'Completed';
    task.completed_at = new Date();
    await task.save();
    res.status(200).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByPk(id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    await task.destroy();
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
