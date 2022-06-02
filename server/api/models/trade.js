const mongoose = require('mongoose');

const tradeSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    offered_by_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'user'
    },
    offered_to_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'user'
    },
    item_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'items'
    },
    items_to_trade : [{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'items'
    }],
    status: {
        type: String,
        required: true
    },
    details: {
        type: String
    }

});

module.exports = mongoose.model('Trade', tradeSchema);