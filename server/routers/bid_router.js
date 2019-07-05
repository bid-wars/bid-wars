// PACKAGES
const express = require('express');

// CONTROLLERS
const bid_ctrl = require('../controllers/bid_controller');

// ROUTER
const BidRouter = express.Router();

// ROUTES
BidRouter.post('/open30', bid_ctrl.open30);
BidRouter.post('/closed30', bid_ctrl.closed30);
BidRouter.post('/rep30', bid_ctrl.rep30);

// EXPORT ROUTER
module.exports = {
    BidRouter
}