const express = require('express');
const {getEmployeeAmountApi } = require('../controllers/DashboardController/DashboardController');
const dashboardRoute  = express.Router();


dashboardRoute.post("/getEmployeeAmountApi",getEmployeeAmountApi)
    

module.exports=dashboardRoute