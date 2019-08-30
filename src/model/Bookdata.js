const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://sulaimankc:sulaimankc@cluster0-9e1fm.mongodb.net/test?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

var newBookSchema = new Schema({
    title: String,
    genre: String,
    author: String,
});

var bookData = mongoose.model('Book-data',newBookSchema);

module.exports = bookData;