// PACKAGES
const express = require('express');

// MIDDLEWARE
const midWare = require('../middleware/request-level');

// CONTROLLERS
const event_ctrl = require('../controllers/event_controller');

// ROUTER
const EventRouter = express.Router();

// ENDPOINT ROUTES
EventRouter.get('/all', midWare.userLoggedIn, midWare.userIsBusiness, event_ctrl.getEvents);
EventRouter.post('/add', midWare.userLoggedIn, midWare.userIsBusiness, event_ctrl.addEvent);
EventRouter.put('/update', midWare.userLoggedIn, midWare.userIsBusiness, event_ctrl.updateEvent);
EventRouter.delete('/delete', midWare.userLoggedIn, midWare.userIsBusiness, event_ctrl.deleteEvent);

// EXPORT ROUTER
module.exports = {
    EventRouter
}