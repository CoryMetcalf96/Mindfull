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

// Create
router.post('/', (req, res) => {
    Night.create(req.body, (err, createdNight) =>{
        res.redirect('/night');
    });
});

// Export
module.exports = router;