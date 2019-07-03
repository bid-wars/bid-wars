// SERVER PACKAGES
require('dotenv').config();
const express = require('express'),
      massive = require('massive');
const {addRoutes} = require('./routers/routers');
const {socketConnection} = require('./sockets/setup.socket');
const {CONNECTION_STRING, SERVER_PORT} = process.env;

// EXPRESS SETUP
const app = express();

// DATABASE CONNECTION
massive(CONNECTION_STRING).then((database) => {
    app.set('db', database);
    console.log('Database connected!');
})

// SEVER SETUP
const server = app.listen(SERVER_PORT, () => {
    console.log(`Server listening on ${SERVER_PORT}!`);
});

// ROUTES (AKA ENDPOINTS)
addRoutes(app);

// SOCKET SETUP
socketConnection(server, app);








// CONTROLLERS
const auth_ctrl = require('./controllers/auth_controller'),
      s3Controller = require('./controllers/s3Controller');

// AUTH ENDPOINTS
app.post('/auth/login', auth_ctrl.login) // Logs in a user
app.post('/auth/register', auth_ctrl.register); // Registers a user
app.get('/auth/logout', auth_ctrl.logout); // Logs out a user

// S3 ENPOINT
app.get('/sign-s3', s3Controller.awsCall) // Sends and manages images for S3

// TWILLIO ENDPOINT
app.post('/api/twillio', twillioController.send) // Sends a text message with Twillio