const express = require("express");
const router = express.Router();
const ConvController = require('../controllers/conversations');
/**
 * Router for message
 */

router.post("/",ConvController.new_conv);

router.get("/:userId",  ConvController.getConvUser);

router.get("/find/:firstUserId/:secondUserId",  ConvController.getConvUser);


module.exports = router;
