const mongoose = require("mongoose");

const Message = require("../models/Message");
/**
 * Message for new message and save in mongoDb
 * @param req
 * @param res
 * @param next
 */
exports.new_message = async (req, res) => {
    const newMessage = new Message(req.body);
    try {
        const savedMessage = await newMessage.save();
        res.status(200).json(savedMessage);
    } catch (err) {
        res.status(500).json(err);
    }
};
/**
 * Get conv id   ,
 * Find conv in mongoDb an check if exists and get it
 * @param req
 * @param res
 */
exports.get_convId = async  (req, res) => {
    try {
        const messages = await Message.find({
            conversationId: req.params.conversationId,
        });
        res.status(200).json(messages);
    } catch (err) {
        res.status(500).json(err);
    }
};