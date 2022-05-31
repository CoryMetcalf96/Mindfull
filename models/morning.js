const mongoose = require('mongoose');

const morningSchema = new mongoose.Schema({
    category: String,
    routine: String,
    affirmation: String,
    daysCompleted: Number,
})

const Morning = mongoose.model('Morning', morningSchema);

module.exports = Morning;