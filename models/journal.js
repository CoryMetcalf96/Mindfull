const mongoose = require('mongoose');

const journalSchema = new mongoose.Schema({
    subject: String,
    body: String,
});

const Journal = mongoose.model('Journal', journalSchema);

module.exports = Journal;