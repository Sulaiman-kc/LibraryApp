const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/LibraryApp');
const Schema = mongoose.Schema;

var newAuthorSchema = new Schema({
    name: String,
    dob: String,
    place: String,
});

var authorData = mongoose.model('Author-data',newAuthorSchema);

module.exports = authorData;