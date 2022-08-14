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
        newMsgOne:0,
        newMsgTwo:0
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


exports.update_conv= (req, res) => {
    if (!req.body) {
        console.log("not good")
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const convId = req.params.convId;
    Conversation.findByIdAndUpdate(convId, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Conversation with id=${convId}. Maybe Conversation was not found!`
                });
            } else res.send({ message: "Conversation was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Conversation with id=" + convId
            });
        });
};