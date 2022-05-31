const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema ({
    item: String,
    priority: String,
    notes: String
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;