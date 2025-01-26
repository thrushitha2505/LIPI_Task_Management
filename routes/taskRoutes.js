const express = require('express');
const { createTask, getTasks, updateTask, completeTask, deleteTask } = require('../controller/taskController');

const router = express.Router();

router.post('/createTask', createTask);
router.get('/tasks', getTasks);
router.put('/tasks/:id', updateTask);
router.put('/tasks/:id/complete', completeTask);
router.delete('/tasks/:id', deleteTask);

module.exports = router;
