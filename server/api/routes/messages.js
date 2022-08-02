const express = require("express");
const router = express.Router();
const MessagesController = require('../controllers/messages');
/**
 * Router for message
 */

router.post("/",MessagesController.new_message);

router.get("/:conversationId",  MessagesController.get_convId);

module.exports = router;
