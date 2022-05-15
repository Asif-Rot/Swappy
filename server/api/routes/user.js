const express = require("express");
const router = express.Router();

const UserController = require('../controllers/user');
const checkAuth = require('../middleware/check-auth');

router.post("/signup", UserController.user_signup);

router.post("/login",UserController.user_login);

router.delete("/:userId",  UserController.user_delete);

module.exports = router;


// const routes = [
//     {
//         method: "POST",
//         url: "/signup",
//         handler: userController.user_signup
//     },
//     {
//         method: "POST",
//         url: "/login",
//         handler: userController.user_login
//     },
//     {
//         method: "DELETE",
//         url: "/:userId",
//         handler: userController.user_delete
//     }
// ]
//
// module.exports = routes;