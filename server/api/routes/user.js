const express = require("express");
const router = express.Router();

const UserController = require('../controllers/user');
const checkAuth = require('../middleware/check-auth');
/**
 * Router for user
 */
router.post("/signup", UserController.user_signup);

router.post("/login",UserController.user_login);

router.delete("/:userId",  UserController.user_delete);

router.get("/:userId",  UserController.user_getUser);


module.exports = router;
