const mongoose = require('mongoose');

const nightSchema = new mongoose.Schema({
    category: String,
    routine: String,
    affirmation: String,
    daysCompleted: Number,
})

const Night = mongoose.model('Night', nightSchema);

module.exports = Night;