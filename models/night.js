const mongoose = require('mongoose');

const nightSchema = new mongoose.Schema({
    category: String,
    item: String,
    isCompleted: Boolean,
})

const Night = mongoose.model('Night', nightSchema);

module.exports = Night;