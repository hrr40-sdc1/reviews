const mongoose = require('mongoose');
const url = 'mongodb://localhost/reviews';
const db = mongoose.connect(url);

module.exports = db;
