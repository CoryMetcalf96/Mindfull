// Require Dependencies
const express = require('express');
const router = express.Router();
const Todo = require('../models/todo')


// Routes / Controllers
// Index
router.get('/', (req, res) => {
    Todo.find({}, (err, foundTodo) => {
        res.render('todo/index.ejs', {
            todo : foundTodo
        });
    });
});

// New
router.get('/new', (req, res) => {
    res.render('todo/new.ejs')
})

// Delete
router.delete('/:id', (req, res) => {
    Todo.findByIdAndRemove(req.params.id, () => {
        res.redirect('/todo')
    })
})

// Update
router.put('/:id', (req, res) => {
    Todo.findByIdAndUpdate(req.params.id, req.body, () => {
        res.redirect('/todo');
    });
});

// Create
router.post('/', (req, res) => {
    Todo.create(req.body, (err, createdArticle) => {
        res.redirect('/todo');
    })
})

// Edit
router.get('/:id/edit', (req, res) => {
    Todo.findById(req.params.id, (err, foundTodo) => {
        res.render('todo/edit.ejs', {
            todo: foundTodo
        });
    });
});

// Show
router.get('/:id', (req, res) => {
    Todo.findById(req.params.id, (err, foundTodo) => {
        res.render('todo/show.ejs', {
            todo: foundTodo
        });
    });
});


// Export
module.exports = router;