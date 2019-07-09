// PACKAGES
const express = require('express');

// CONTROLLERS
const auth_ctrl = require('../controllers/auth_controller');

// ROUTER
const AuthRouter = express.Router();

// ENDPOINT ROUTES
AuthRouter.post('/register', auth_ctrl.register); // REGISTERS A NEW USER
AuthRouter.post('/login', auth_ctrl.login); // LOGS USER IN
AuthRouter.get('/logout', auth_ctrl.logout); // LOGS USER OUT

// EXPORT ROUTER
module.exports = {
    AuthRouter
}