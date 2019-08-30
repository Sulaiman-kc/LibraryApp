const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://sulaimankc:sulaimankc@cluster0-9e1fm.mongodb.net/test?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

var newUserSchema = new Schema({
    first_name: {type:String },   
    last_name: String,
    email: String,
    number: String,
    password: String,
    confirm_password: String,
});

var userData = mongoose.model('User-data',newUserSchema);

module.exports = userData;