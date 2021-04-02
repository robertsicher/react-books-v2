const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title:{ type: String, trim: true},
    author:{type: String, trim: true},
    image:{type: String, trim: true},
    link:{type: String, trim: true},
},);

const Book = mongoose.model('book', bookSchema);

module.exports = Book;