// Require Dependencies
const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();


// Database Connection + Error / Success Check
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (err) => console.log(err.message + ' is mongo not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));


// Middleware
// Gives access to req.body to push data
app.use(express.urlencoded( {extended: true}));


// Listen
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});