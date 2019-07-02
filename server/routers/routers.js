// API ROUTERS
const {AuthRouter} = require('./auth_router');

// ADD ROUTES TO SERVER
const addRoutes = (app) => {
    app.use('/auth', AuthRouter);
}

// EXPORTS
module.exports = {
    addRoutes
};