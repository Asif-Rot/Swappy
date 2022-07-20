const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");
const path = require("path");
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
                            sex: req.body.sex,
                            imageProfile: req.body.imageProfile,

                        });
                        user
                            .save()
                            .then(result => {
                                const token = jwt.sign(
                                    {
                                        email: user.email,
                                        userId: user._id
                                    },
                                    process.env.JWT_KEY,
                                    {
                                        expiresIn: "1h"
                                    }
                                );
                                res.status(201).json({
                                    message: "User created",
                                    token: token,
                                    id:user._id
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
                        token: token,
                        id:user[0]._id
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
    const userId = req.params.userId;
    User.find({_id: userId}).then((user) => {
        if (!user) {
            return res.status(404).json({
                message: 'User not found'
            })
        } else {
            User.deleteOne({_id: userId.toString()}).exec().then(() => {
                res.status(200).json({
                    message: `user email :  ${userId} is Deleted`
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
    const userId = req.params.userId;
    User.find({_id: userId}).exec().then(user => {
        if (user.length === 1) {
            if(user[0].imageProfile != null ){
                const sendUser = {
                    "id": user[0]._id.toString(),
                    "email": user[0].email,
                    "firstName": user[0].firstName,
                    "lastName": user[0].lastName,
                    "birth": user[0].birth,
                    "imageProfile": user[0].imageProfile,
                    "location": "",
                }
                return res.status(200).json({
                    sendUser
                })
            }
            else{
                const sendUser = {
                    "id": user[0]._id.toString(),
                    "email": user[0].email,
                    "firstName": user[0].firstName,
                    "lastName": user[0].lastName,
                    "birth": user[0].birth,
                    "imageProfile": "",

                }
                return res.status(200).json({
                    sendUser
                })
            }

        }
    }).catch(error => {
        res.status(500).json({
            error
        })
    });
};

exports.user_getUser = (req, res) => {
    const userId = req.params.userId;
    User.find({_id: userId}).exec().then(user => {
        if (user.length === 1) {
            if(user[0].imageProfile != null ){
                const sendUser = {
                    "id": user[0]._id.toString(),
                    "email": user[0].email,
                    "firstName": user[0].firstName,
                    "lastName": user[0].lastName,
                    "birth": user[0].birth,
                    "imageProfile": user[0].imageProfile,
                }
                return res.status(200).json({
                    sendUser
                })
            }
            else{
                const sendUser = {
                    "id": user[0]._id.toString(),
                    "email": user[0].email,
                    "firstName": user[0].firstName,
                    "lastName": user[0].lastName,
                    "birth": user[0].birth,
                    "imageProfile": "",
                    "location": "",

                }
                return res.status(200).json({
                    sendUser
                })
            }

        }
    }).catch(error => {
        res.status(500).json({
            error
        })
    });
};