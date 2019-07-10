// API ROUTERS
const {AuthRouter} = require('./auth_router');
const {BidRouter} = require('./bid_router');
const {EventRouter} = require('./event_router');
const {EmployeeRouter} = require('./employee_router');
// const {TwilioRouter} = require('./twilio_router');
const {s3Router} = require('./s3_router');

// ADD ROUTES TO SERVER
const addRoutes = (app) => {
    app.use('/auth', AuthRouter);
    app.use('/bids', BidRouter);
    app.use('/events', EventRouter);
    app.use('/employees', EmployeeRouter);
    // app.use('/twilio', TwilioRouter);
    app.use('/s3', s3Router);
}

// EXPORTS ROUTES
module.exports = {
    addRoutes
};