// PACKAGES
const express = require('express');

// MIDDLEWARE
const midWare = require('../middleware/request-level');

// CONTROLLERS
const twilio_ctrl = require('../controllers/twilio_controller');

// ROUTER
const TwilioRouter = express.Router();

// ENDPOINT ROUTES
TwilioRouter.post('/send', midWare.userLoggedIn, midWare.userIsBusiness, twilio_ctrl.send); // SENDS MESSAGE

// EXPORT ROUTER
module.exports = {
    TwilioRouter
}