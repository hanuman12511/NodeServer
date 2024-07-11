const express = require('express');
const { getDepartmentApi, getDepartmentControlApi, getDepartmentUpdateApi, departmentsApi } = require('../controllers/EmployeeController/DepartmentController');
const departmentRoute  = express.Router();


departmentRoute.post("/getDepartmentApi",getDepartmentApi)
departmentRoute.post("/getDepartmentControlApi",getDepartmentControlApi)
departmentRoute.post("/getDepartmentUpdateApi",getDepartmentUpdateApi)
departmentRoute.post("/departmentsApi",departmentsApi)
    

module.exports=departmentRoute