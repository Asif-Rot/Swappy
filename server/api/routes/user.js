const express = require("express");
const router = express.Router();
const UserController = require('../controllers/user');
/**
 * Router for user
 */

router.post("/signup",UserController.user_signup);

router.post("/login",UserController.user_login);

router.get("/:userId",  UserController.user_getUser);

router.delete("/:userId",  UserController.user_delete);



module.exports = router;
