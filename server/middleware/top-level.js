const express = require('express'),
      session = require('express-session');

const provider = (app) => {
    app.use(express.json());
    app.use(session({
        secret: SESSION_SECRET,
        saveUninitialized: false,
        resave: false,
        cookie: {
            maxAge: 1000 * 60 * 60
        }
    }));
}

module.exports = {
    provider
}