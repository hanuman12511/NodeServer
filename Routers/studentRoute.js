const express = require('express');
const { attandenceApi, getAttandenceApi, getAttandenceBranchbyApi, AddAttandenceApi, getstudentAttandenceUpdateApi } = require('../controllers/studentsController/StudentAttandenceController');
const studentRoute  = express.Router();


/* employeeRoute.post("/getDepartmentApi",getDepartmentApi) */

studentRoute.post("/StudentattandenceApi",attandenceApi)
studentRoute.post("/getStudentAttandenceApi",getAttandenceApi)
studentRoute.post("/getstudentAttandenceUpdateApi",getstudentAttandenceUpdateApi)
studentRoute.post("/getStudentAttandenceBranchbyApi",getAttandenceBranchbyApi)
studentRoute.post("/AddStudentAttandenceApi",AddAttandenceApi)
module.exports= studentRoute