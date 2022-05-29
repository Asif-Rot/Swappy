const express = require("express");
const router = express.Router();

const tradeController = require('../controllers/trade');
/**
 * Router for trade
 */
router.post("/createTrade", tradeController.createTrade);
router.get("/userSendTrade/:userID",  tradeController.getUserSendTrades);
router.get("/userGotTrade/:userID",  tradeController.getUserGotTrades);
router.get("/userTrade/:userID",  tradeController.getAllUserTrades);
router.get("/allTrade",  tradeController.getAllTrades);
router.get("/oneTrade/:tradeID",  tradeController.getOneTrade);
router.put("/decline/:tradeID",  tradeController.updateTradeDeclined);
router.put("/approve/:tradeID",  tradeController.updateTradeApproved);
router.delete("/:tradeID",  tradeController.deleteTrade);


module.exports = router;
