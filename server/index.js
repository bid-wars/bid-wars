// SERVER PACKAGES
require('dotenv').config();
const express = require('express'),
      session = require('express-session'),
      massive = require('massive');

// CONTROLLERS
const auth_ctrl = require('./controllers/auth_controller');

// SERVER
const app = express();
const {CONNECTION_STRING, SERVER_PORT, SESSION_SECRET} = process.env;

app.use(express.json());
app.use(session({
    secret: SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 1000 * 60 * 60,
    }
}))

massive(CONNECTION_STRING).then((database) => {
    app.set('db', database);
    console.log('Database connected!');
    app.listen(SERVER_PORT, () => {
        console.log(`Server listening on ${SERVER_PORT}!`);
    })
})

// AUTH ENDPOINTS
app.post('/auth/login', auth_ctrl.login) // Logs in a user