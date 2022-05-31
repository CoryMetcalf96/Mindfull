const mongoose = requite('mongoose');

const journalSchema = new mongoose.Scheme({
    subject: String,
    body: String,
});

const Journal = mongoose.model('Journal', journalSchema);

module.exports = Journal;