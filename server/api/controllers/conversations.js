const mongoose = require("mongoose");

const Conversation = require("../models/Conversation");
/**
 * Message for new message and save in mongoDb
 * @param req
 * @param res
 * @param next
 */
//new conv
exports.new_conv = async (req, res) => {

    const newConversation = new Conversation({
        members: [req.body.senderID, req.body.receiverId],
    });
    try {
        const savedConversation = await newConversation.save();
        res.status(200).json(savedConversation);
    } catch (err) {
        res.status(500).json(err);
    }
};


//get conv of a user

exports.getConvUser = async (req, res) => {
    try {
        const conversation = await Conversation.find({
            members: { $in: [req.params.userId] },
        });
        res.status(200).json(conversation);
    } catch (err) {
        res.status(500).json(err);
    }
};

// get conv includes two userId
exports.getConvUserOfTwo = async (req, res) => {
    try {
        const conversation = await Conversation.findOne({
            members: { $all: [req.params.firstUserId, req.params.secondUserId] },
        });
        res.status(200).json(conversation)
    } catch (err) {
        res.status(500).json(err);
    }
};