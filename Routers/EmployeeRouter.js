const express = require('express');
const { attandenceApi, getAttandenceApi, getAttandenceUpdateApi, getAttandenceBranchbyApi, AddAttandenceApi } = require('../controllers/EmployeeController/EmployeeAttandenceController');
const employeeRoute  = express.Router();


/* employeeRoute.post("/getDepartmentApi",getDepartmentApi) */

employeeRoute.post("/attandenceApi",attandenceApi)
employeeRoute.post("/getAttandenceApi",getAttandenceApi)
employeeRoute.post("/getAttandenceUpdateApi",getAttandenceUpdateApi)
employeeRoute.post("/getAttandenceBranchbyApi",getAttandenceBranchbyApi)
employeeRoute.post("/AddAttandenceApi",AddAttandenceApi)
module.exports=employeeRoute