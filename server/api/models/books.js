const mongoose = require('mongoose');

const booksSchema = mongoose.Schema({
        _id: mongoose.Schema.Types.ObjectId,
        name: {
            type: String,
            required: true
        },
        book_condition: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        genre: {
            type: String,
            required: true
        },
        description: {
            type: String,
        },

    },

);

module.exports = mongoose.model('books', booksSchema);