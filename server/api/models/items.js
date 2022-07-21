const mongoose = require('mongoose');

const itemsSchema = mongoose.Schema({
        _id: mongoose.Schema.Types.ObjectId,

        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'user'
        },
        item_type: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        item_condition: {
            type: String,
            required: true
        },
        author: {
            type: String,
        },
        genre: {
            type: Array,
        },
        description: {
            type: String,
        },
        image: {
            type: String,
            required:true
        }
    },
);

module.exports = mongoose.model('items', itemsSchema);