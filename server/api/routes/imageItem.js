const express = require("express");
const router = express.Router();
const itemImg = require('../controllers/imageItem');

/**
 * Router for profile image
 */
router.get("/getImageItem/:imgId", itemImg.get_image_item);
router.post("/uploadItem", itemImg.upload_image_item);

module.exports = router;