// PACKAGES
const express = require('express');

// MIDDLEWARE
const midWare = require('../middleware/request-level');

// CONTROLLERS
const bid_ctrl = require('../controllers/bid_controller');

// ROUTER
const BidRouter = express.Router();

// ENDPOINT ROUTES
BidRouter.post('/reports', midWare.userLoggedIn, midWare.userIsBusiness, bid_ctrl.bidReports);
BidRouter.get('/all', midWare.userLoggedIn, midWare.userIsBusiness, bid_ctrl.getBids);
BidRouter.post('/add', midWare.userLoggedIn, midWare.userIsBusiness, bid_ctrl.addBid);
BidRouter.put('/update', midWare.userLoggedIn, midWare.userIsBusiness, bid_ctrl.updateBid);
BidRouter.delete('/delete/:id', midWare.userLoggedIn, midWare.userIsBusiness, bid_ctrl.deleteBid);

// EXPORT ROUTER
module.exports = {
    BidRouter
}