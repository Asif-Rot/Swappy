const express = require("express");
const router = express.Router();
const profileImg = require('../controllers/imageBook');

/**
 * Router for profile image
 */
router.get("/getImageBook/:imgId", profileImg.get_image_book);
router.post("/uploadBook", profileImg.upload_image_book);

module.exports = router;