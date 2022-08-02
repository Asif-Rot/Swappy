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
        console: {
            type: String
        },
        description: {
            type: String,
        },
        image: {
            type: String,
            required:true
        },
        image_public_id: {
            type: String
        },
        trade_completed: {
            type: Boolean
        }
    },
);

module.exports = mongoose.model('items', itemsSchema);