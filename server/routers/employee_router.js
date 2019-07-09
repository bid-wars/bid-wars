// PACKAGES
const express = require('express');

// MIDDLEWARE
const midWare = require('../middleware/request-level');

// CONTROLLERS
const employee_ctrl = require('../controllers/employee_controller');

// ROUTER
const EmployeeRouter = express.Router();

// ENDPOINT ROUTES
EmployeeRouter.get('/all', midWare.userLoggedIn, midWare.userIsOwner, employee_ctrl.getEmployees);
EmployeeRouter.post('/add', midWare.userLoggedIn, midWare.userIsOwner, employee_ctrl.addEmployee);
EmployeeRouter.put('/update', midWare.userLoggedIn, midWare.userIsOwner, employee_ctrl.updateEmployee);
EmployeeRouter.delete('/delete', midWare.userLoggedIn, midWare.userIsOwner, employee_ctrl.deleteEmployee);

// EXPORT ROUTER
module.exports = {
    EmployeeRouter
}