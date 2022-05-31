// Dependencies
const express = require('express');
const router = express.Router();
const Morning = require('../models/morning.js')


// Routes / Controllers
// Index
router.get('/', (req, res) => {
    Morning.find({}, (err, foundMorning) => {
        res.render('morning/index.ejs', {
            morning : foundMorning
        });
    })
});

// New
router.get('/new', (req, res) => {
    res.render('morning/new.ejs');
});

// Delete
router.delete('/:id', (req, res) => {
    Morning.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/morning');
    });
});

// Update
router.put('/:id', (req, res) => {
    Morning.findByIdAndUpdate(req.params.id, req.body, () => {
        res.redirect('/morning')
    })
})

// Create
router.post('/', (req, res) => {
    Morning.create(req.body, (err, createdMorning) => {
        res.redirect('/morning');
    });
});

// Edit
router.get('/:id/edit', (req, res) => {
    Morning.findById(req.params.id, (err, foundMorning) => {
        res.render('morning/edit.ejs', {
            morning: foundMorning
        });
    });
});

// Show
router.get('/:id', (req, res) => {
    Morning.findById(req.params.id, (err, foundMorning) => {
        res.render('morning/show.ejs', {
            morning: foundMorning
        });
    });
});

// Export
module.exports = router;