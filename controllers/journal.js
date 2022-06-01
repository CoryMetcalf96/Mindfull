// Require dependencies
const express = require('express');
const router = express.Router();
const Journal = require('../models/journal.js');


// Routes / Controllers
// Index
router.get('/', (req, res) => {
    Journal.find({}, (err, foundJournal) => {
        res.render('journal/index.ejs', {
            journal: foundJournal
        });
    });
});

// New
router.get('/new', (req, res) => {
    res.render('journal/new.ejs');
});

// Delete
router.delete('/:id', (req, res) => {
    Journal.findByIdAndRemove(req.params.id, () => {
        res.redirect('/journal');
    });
});

// Update
router.put('/:id', (req, res) => {
    Journal.findByIdAndUpdate(req.params.id, req.body, () => {
        res.redirect('/journal')
    });
});

// Create
router.post('/', (req, res) => {
    Journal.create(req.body, (err, createdJournal) => {
        res.redirect('/journal');
    });
});

// Edit
router.get('/:id/edit', (req, res) => {
    Journal.findById(req.params.id, (err, foundJournal) => {
        res.render('journal/edit.ejs', {
            journal: foundJournal
        });
    });
});

// Show
router.get('/:id', (req, res) => {
    Journal.findById(req.params.id, (err, foundJournal) => {
        res.render('journal/show.ejs', {
            journal: foundJournal
        });
    });
});


// Export
module.exports = router;