const mongoose = require('mongoose');

const todoSchema = new mongoose.Scheme ({
    item: String,
    priority: String,
    isCompleted: Boolean,
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;