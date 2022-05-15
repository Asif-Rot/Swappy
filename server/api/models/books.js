const mongoose = require('mongoose');

const booksSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    upload_date: {
        type: Date
    },
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
{
    timestamp: true
}
);

module.exports = mongoose.model('books', booksSchema);