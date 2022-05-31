// Require Dependencies
const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const methodOverride = require('method-override');
const morningController = require('./controllers/morning.js');
const nightController = require('./controllers/night.js');
const todoController = require('./controllers/todo.js');


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
app.use(methodOverride('_method'));


// Controllers
app.use('/morning', morningController);
app.use('/night', nightController);
app.use('/todo', todoController)

// Routes
// Index (Home Page)
app.get('/', (req, res) => {
    res.render('index.ejs');
});


// Listen
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});