const mongoose = require("mongoose");

const Trade = require("../models/trade");

/**
 * create new trade
 */
exports.createTrade = (req,res) => {
    const {offered_by_id, offered_to_id, item_id, items_to_trade, status, details} = req.body;

    // if()

    const trade = new Trade({
        _id: new mongoose.Types.ObjectId(),
        offered_by_id, 
        offered_to_id, 
        item_id, 
        items_to_trade, 
        status, 
        details
    });

    trade.save().then(result => {
        res.status(200).json({
            message: "new trade created"
        });
    })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
    
}

/** return one trade by given tradeID */
exports.getOneTrade = (req, res) => {
    const tradeID = req.params.tradeID;

    Trade.findById(tradeID).populate("offered_by_id",'firstName lastName')
    .populate("offered_to_id",'firstName lastName').then(trade => {
        res.status(200).json(trade)
    }).catch(err => {
        res.status(500).json({
            err
        })
    });
}

/** return all user trades by  given userID */
exports.getAllUserTrades = (req, res) => {
    const userID = req.params.userID;
    console.log(req.params.test)
    Trade.find({$or: [{offered_by_id : userID},{offered_to_id : userID}]})
    .find({$or : [{status :"ההצעה התקבלה"},{status :"ההצעה נדחתה"}]})
    .populate("offered_by_id",'firstName lastName')
    .populate("offered_to_id",'firstName lastName').then(result =>{
        res.status(200).json(result)
    })
        .catch(err => {
            res.status(500).json(err)
        });
}

/** return all trades user sent  by  given userID */
exports.getUserSendTrades = (req, res) => {
    const userID = req.params.userID;

    Trade.find({$and : [{offered_by_id : userID},{status :"הצעה חדשה"}]})
    .populate("offered_by_id",'firstName lastName')
    .populate("offered_to_id",'firstName lastName').then(result =>{
        res.status(200).json(result)
    })
        .catch(err => {
            res.status(500).json(err)
        });
}

/** return all trades user got by  given userID */
exports.getUserGotTrades = (req, res) => {
    const userID = req.params.userID;

    Trade.find({$and : [{offered_to_id : userID},{status :"הצעה חדשה"}]})
    .populate("offered_by_id",'firstName lastName')
    .populate("offered_to_id",'firstName lastName').then(result =>{
        res.status(200).json(result)
    })
        .catch(err => {
            res.status(500).json(err)
        });
}

/** return all trades id the DB */
exports.getAllTrades = (req, res) => {

    Trade.find().populate("offered_by_id",'firstName lastName')
    .populate("offered_to_id",'firstName lastName').then(result =>{
        res.status(200).json(result)
    })
        .catch(err => {
            res.status(500).json(err)
        });
}

/** delete trade by given tradeID */
exports.deleteTrade = (req, res) => {
    const tradeID = req.params.tradeID;

    Trade.findByIdAndDelete(tradeID).then(result =>{
        res.status(200).json({
            message : `trade id :  ${tradeID} is Deleted`
        })
    })
        .catch(err => {
            res.status(500).json(err)
        });
}

/** update trade decline by given tradeID */
exports.updateTradeDeclined = (req, res) => {
    const tradeID = req.params.tradeID;

    Trade.findByIdAndUpdate(tradeID,{status : "ההצעה נדחתה"}).then(result =>{
        res.status(200).json(result)
    })
        .catch(err => {
            res.status(500).json(err)
        });
}

/** update trade approve by given tradeID */
exports.updateTradeApproved = (req, res) => {
    const tradeID = req.params.tradeID;

    Trade.findByIdAndUpdate(tradeID,{status : "ההצעה התקבלה"}).then(result =>{
        res.status(200).json(result)
    })
        .catch(err => {
            res.status(500).json(err)
        });
}