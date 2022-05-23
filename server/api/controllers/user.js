const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");
/**
 * SingUp for new user and save in mongoDb
 * @param req
 * @param res
 * @param next
 */
exports.user_signup = (req, res, next) => {
    User.find({email: req.body.email})
        .exec()
        .then(user => {
            if (user.length >= 1) {
                return res.status(409).json({
                    message: "Mail exists"
                });
            } else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        return res.status(500).json({
                            error: err
                        });
                    } else {
                        const user = new User({
                            _id: new mongoose.Types.ObjectId(),
                            email: req.body.email,
                            password: hash,
                            firstName: req.body.firstName,
                            lastName: req.body.lastName,
                            birth: req.body.birth,
                            sex: req.body.sex
                        });
                        user
                            .save()
                            .then(result => {
                                console.log(result);
                                res.status(201).json({
                                    message: "User created"
                                });
                            })
                            .catch(err => {
                                console.log(err);
                                res.status(500).json({
                                    error: err
                                });
                            });
                    }
                });
            }
        });
};
/**
 * Login user ,
 * Find user in mongoDb an check if exists and login
 * @param req
 * @param res
 * @param next
 */
exports.user_login = (req, res, next) => {
    User.find({email: req.body.email})
        .exec()
        .then(user => {
            if (user.length < 1) {
                return res.status(401).json({
                    message: "Auth failed"
                });
            }
            bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                if (err) {
                    return res.status(401).json({
                        message: "Auth failed"
                    });
                }
                if (result) {
                    const token = jwt.sign(
                        {
                            email: user[0].email,
                            userId: user[0]._id
                        },
                        process.env.JWT_KEY,
                        {
                            expiresIn: "1h"
                        }
                    );
                    return res.status(200).json({
                        message: "Auth successful",
                        token: token
                    });
                }
                res.status(401).json({
                    message: "Auth failed"
                });
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};
/**
 * If we want delete user from mongoDB
 * @param req
 * @param res
 * @param next
 */
exports.user_delete = (req, res, next) => {
    const emailId = req.params.emailId;
    User.find({email: emailId}).then((user) => {
        if (!user) {
            return res.status(404).json({
                message: 'User not found'
            })
        } else {
            User.deleteOne({email: emailId.toString()}).exec().then(() => {
                res.status(200).json({
                    message: `user email :  ${emailId} is Deleted`
                })
            })
        }
    }).catch(error => {
        res.status(500).json({
            error
        })
    });

};



/**
 * Get user by Id/email to take info about user
 * @param req
 * @param res
 */
exports.user_getUser = (req, res) => {
    const emailId = req.params.emailId;
    console.log(emailId)
    User.find({email: emailId}).exec().then(user => {
        if (user.length === 1) {
            const sendUser = {
                "id": user[0]._id.toString(),
                "email": user[0].email,
                "firstName": user[0].firstName,
                "lastName": user[0].lastName,
                "birth": user[0].birth
            }
            return res.status(200).json({
                sendUser
            })
        }
    }).catch(error => {
        res.status(500).json({
            error
        })
    });
};