// PACKAGES
const express = require('express');

// MIDDLEWARE
const midWare = require('../middleware/request-level');

// CONTROLLERS
const twilio_ctrl = require('../controllers/twilio_controller');

// ROUTER
const TwilioRouter = express.Router();

// ROUTES
TwilioRouter.post('/send', midWare.userLoggedIn, midWare.userIsBusiness, twilio_ctrl.send); // REGISTERS A NEW USER

// EXPORT ROUTER
module.exports = {
    TwilioRouter
}