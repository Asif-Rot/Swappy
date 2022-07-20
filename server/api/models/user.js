const mongoose = require('mongoose');
/**
 * Schema of user in mongodb
 */
const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: {
        type: String,
        required: true,
        unique: true,
        match: /[a-z0-9A-Z!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9A-Z!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9A-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?/
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    birth: {
        type: Date,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    imageProfile: {
        type: String,
        required:false
    },
    city: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('user', userSchema);