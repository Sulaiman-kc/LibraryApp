const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://sulaimankc:sulaimankc@cluster0-9e1fm.mongodb.net/test?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

var newAuthorSchema = new Schema({
    name: String,
    dob: String,
    place: String,
});

var authorData = mongoose.model('Author-data',newAuthorSchema);

module.exports = authorData;