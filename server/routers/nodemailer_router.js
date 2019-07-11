// PACKAGES
const express = require('express');

// MIDDLEWARE
const midWare = require('../middleware/request-level');

// CONTROLLERS
const nodeMail_ctrl = require('../controllers/nodemailer_controller');

// ROUTER
const NodemailerRouter = express.Router();

// ENDPOINT ROUTES
NodemailerRouter.post('/send', midWare.userLoggedIn, midWare.userIsBusiness, nodeMail_ctrl.send);

// EXPORT ROUTER
module.exports = {
    NodemailerRouter
}