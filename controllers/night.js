// Require Dependencies
const express = require('express');
const router = express.Router();
const Night = require('../models/night')


// Routes / Controllers
// Index
router.get('/', (req, res) => {
    Night.find({}, (err, foundNight) => {
        res.render('night/index.ejs', {
            night: foundNight
        });
    });
});

// New
router.get('/new', (req, res) => {
    res.render('night/new.ejs');
});

// Delete
router.delete('/:id', (req, res) => {
    Night.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect("/night");
    });
});

// Update
router.put('/:id', (req, res) => {
    Night.findByIdAndUpdate(req.params.id, req.body, () => {
        res.redirect('/night')
    });
});

// Create
router.post('/', (req, res) => {
    Night.create(req.body, (err, createdNight) =>{
        res.redirect('/night');
    });
});

// Edit
router.get('/:id/edit', (req, res) => {
    Night.findById(req.params.id, (err, foundNight) => {
        res.render('night/edit.ejs', {
            night: foundNight
        });
    });
});

// Show
router.get('/:id', (req, res) => {
    Night.findById(req.params.id, (err, foundNight) => {
        res.render('night/show.ejs', {
            night: foundNight
        });
    });
});


// Export
module.exports = router;