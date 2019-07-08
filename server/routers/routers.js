// API ROUTERS
const {AuthRouter} = require('./auth_router');
const {BidRouter} = require('./bid_router');
const {TwilioRouter} = require('./twilio_router');
const {s3Router} = require('./s3_router');

// ADD ROUTES TO SERVER
const addRoutes = (app) => {
    app.use('/auth', AuthRouter);
    app.use('/bids', BidRouter);
    // app.use('/twilio', TwilioRouter);
    app.use('/s3', s3Router);
}

// EXPORTS
module.exports = {
    addRoutes
};