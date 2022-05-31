const mongoose = requite('mongoose');

const journalSchema = new mongoose.Scheme({
    subject: String,
    body: String,
    tag1: String,
    tag2: String,
    tage3: String
});

const Journal = mongoose.model('Journal', journalSchema);

module.exports = Journal;