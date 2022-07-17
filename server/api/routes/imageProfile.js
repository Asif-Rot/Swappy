const express = require("express");
const router = express.Router();
const profileImg = require('../controllers/imageProfile');

/**
 * Router for profile image
 */
router.get("/getImages/:imgId", profileImg.get_image_profile);
router.post("/upload", profileImg.upload_image_profile);

module.exports = router;