const express = require("express");
const router = express.Router();

const UserController = require('../controllers/user');
const checkAuth = require('../middleware/check-auth');
/**
 * Router for user
 */
router.post("/signup", UserController.user_signup);

router.post("/login",UserController.user_login);

router.get("/:emailId",  UserController.user_getUser);

router.delete("/:emailId",  UserController.user_delete);



module.exports = router;
