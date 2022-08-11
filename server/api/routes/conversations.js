const express = require("express");
const router = express.Router();
const ConvController = require('../controllers/conversations');
/**
 * Router for message
 */

router.post("/",ConvController.new_conv);

router.get("/:userId",  ConvController.getConvUser);

router.get("/find/:firstUserId/:secondUserId",  ConvController.getConvUserOfTwo);

router.put("/updateConve/:convId", ConvController.update_conv);

module.exports = router;
