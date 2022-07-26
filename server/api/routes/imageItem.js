const express = require("express");
const router = express.Router();
const itemImg = require('../controllers/imageItem');

/**
 * Router for profile image
 */
router.post("/uploadItem", itemImg.upload_image_item);
router.delete("/deleteItem/:publicId", itemImg.delete_image_item);

module.exports = router;