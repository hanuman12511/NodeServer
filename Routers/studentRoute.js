const express = require('express');
const { attandenceApi, getAttandenceApi, getAttandenceUpdateApi, getAttandenceBranchbyApi, AddAttandenceApi } = require('../controllers/studentsController/StudentAttandenceController');
const studentRoute  = express.Router();


/* employeeRoute.post("/getDepartmentApi",getDepartmentApi) */

studentRoute.post("/StudentattandenceApi",attandenceApi)
studentRoute.post("/getStudentAttandenceApi",getAttandenceApi)
studentRoute.post("/getStudentAttandenceUpdateApi",getAttandenceUpdateApi)
studentRoute.post("/getStudentAttandenceBranchbyApi",getAttandenceBranchbyApi)
studentRoute.post("/AddStudentAttandenceApi",AddAttandenceApi)
module.exports= studentRoute