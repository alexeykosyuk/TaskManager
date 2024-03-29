const mongoose = require('mongoose');
require('../models/task');
const Task = mongoose.model('Task');

module.exports = {
    setConnection,
    allTasks,
    createTask,
    deleteTask,
    findTaskById,
    editTaskById,
    findTaskByStatus
};

function setConnection() {
    return mongoose.connect(`mongodb://localhost:27017/TaskManager`);
}

function allTasks() {
    return Task.find();
}

function createTask(data) {
    const taskData = new Task({
        taskName: data.taskName,
        taskDescription: data.taskDescription,
        taskStatus: data.taskStatus,
        deadline: data.deadlineDate,
        filename: data.filename
    });
    return taskData.save();
}

function deleteTask(id) {
    return Task.findByIdAndDelete(id);
}

function findTaskByStatus(status) {
    return Task.find({
        taskStatus: status
    });
}

function findTaskById(id) {
    return Task.findById(id);
}

function editTaskById(id, taskData) {
    return Task.findByIdAndUpdate(id, taskData, {
        new: true
    });
}