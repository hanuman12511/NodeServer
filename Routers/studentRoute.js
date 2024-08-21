const express = require('express');
const { attandenceApi, getAttandenceApi, getAttandenceBranchbyApi, AddAttandenceApi, getstudentAttandenceUpdateApi, getstudentAttandenceApi } = require('../controllers/studentsController/StudentAttandenceController');
const { getclassDetailsFeeApi } = require('../controllers/studentsController/studentsController');
const studentRoute  = express.Router();


/* employeeRoute.post("/getDepartmentApi",getDepartmentApi) */

studentRoute.post("/StudentattandenceApi",attandenceApi)
/* studentRoute.post("/getStudentAttandenceApi",getAttandenceApi) */
studentRoute.post("/getStudentAttandenceApi",getstudentAttandenceApi)
studentRoute.post("/getstudentAttandenceUpdateApi",getstudentAttandenceUpdateApi)
studentRoute.post("/getStudentAttandenceBranchbyApi",getAttandenceBranchbyApi)
studentRoute.post("/AddStudentAttandenceApi",AddAttandenceApi)
studentRoute.post("/getclassDetailsFeeApi",getclassDetailsFeeApi)
module.exports= studentRoute