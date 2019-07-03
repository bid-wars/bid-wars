// SERVER PACKAGES
require('dotenv').config();
const express = require('express'),
      massive = require('massive');
const {provider} = require('./middleware/top-level');
const {addRoutes} = require('./routers/routers');
const {socketConnection} = require('./sockets/setup.socket');
const {CONNECTION_STRING, SERVER_PORT} = process.env;

// EXPRESS SETUP
const app = express();

// TOP-LEVEL MIDDLEWARE
provider(app);

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
