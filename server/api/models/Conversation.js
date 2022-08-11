const mongoose = require("mongoose");

const ConversationSchema = new mongoose.Schema(
    {
        members: {
            type: Array,
        },
        newMsgOne:{
            type: Number,
            required:false
        },
        newMsgTwo:{
            type:Number,
            required:false
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Conversation", ConversationSchema);