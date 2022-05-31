const mongoose = require('mongoose');

const morningSchema = new mongoose.Schema({
    category: String,
    item: String,
    isCompleted: Boolean,
})

const Morning = mongoose.model('Morning', morningSchema);

module.exports = Morning;