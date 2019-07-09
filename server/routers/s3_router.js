// PACKAGES
const express = require('express');

// CONTROLLERS
const s3_ctrl = require('../controllers/s3Controller');

// ROUTER
const s3Router = express.Router();

// ENDPOINT ROUTES
s3Router.get('/sign', s3_ctrl.awsCall); // Makes S3 / AWS CALL

// EXPORT ROUTER
module.exports = {
    s3Router
}