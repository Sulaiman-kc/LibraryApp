const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/LibraryApp');
const Schema = mongoose.Schema;

var newBookSchema = new Schema({
    title: String,
    genre: String,
    author: String,
});

var bookData = mongoose.model('Book-data',newBookSchema);

module.exports = bookData;