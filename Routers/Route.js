const express = require('express');
const router  = express.Router();
const UserControll = require('../controllers/userControllers/UserControll')
const studentsController = require('../controllers/studentsController/studentsController')
const MasterController = require('../controllers/MasterController/MasterController');
const { employeeApi, getEmployeeApi, getEmployeeByIdApi } = require('../controllers/EmployeeController/EmployeeController');



//user

router.post("/loginuser", UserControll.userLogin )
router.post("/registeruser", UserControll.userRegister )

//students

router.post("/getStudentByBranchFeeApi", studentsController.getStudentByBranchFeeApi)
router.post("/studentLogin", studentsController.studentLogin)
router.post("/StudentsApi", studentsController.studentsApi )
router.post("/studentFeeApi", studentsController.studentsFeeApi )
router.post("/getStudentsApi", studentsController.getStudentsApi )
router.post("/displayStudentsClassBy", studentsController.displayStudentsClassBy )
router.post("/studentAttendance", studentsController.studentAttendance )
router.post("/getstudentsFeeApi", studentsController.getstudentsFeeApi )
router.post("/addStudentsFeeApi", studentsController.addStudentsFeeApi )
/* router.get("/uploadFileApi", studentsController.uploadExcelFile )
router.get("/downloadApi", studentsController.downloadApi )
 */

// master
router.post("/addBranchUpdateApi", MasterController.addBranchUpdateApi)
router.post("/addBranchApi", MasterController.addBranchApi)
router.get("/getBranchApi", MasterController.getBranchApi)
router.post("/getBranchOneApi", MasterController.getBranchOneApi)
router.post("/getBranchGroupIdApi", MasterController.getBranchGroupIdApi)
router.post("/getSessionByBranchIdApi", MasterController.getSessionByBranchIdApi)
router.post("/feeheadApi", MasterController.feeHeadApi)
router.post("/getfeeHeadApi", MasterController.getfeeHeadsApi)
router.post("/getAllfeeHeadApi", MasterController.getAllfeeHeadsApi)
router.post("/sessionApi", MasterController.sessionApi)
router.get("/getSessionApi", MasterController.getSessionApi)
router.post("/classApi", MasterController.classApi)
router.post("/getClassApi", MasterController.getClassApi)
router.post("/getSectionApi", MasterController.getSectionApi)
router.post("/SectionApi", MasterController.SectionApi)
router.post("/classDetailsApi", MasterController.ClassDetailApi)
router.post("/getclassDetailApi", MasterController.getClassDetailApi)
router.post("/getClassDetailApiByclass", MasterController.getClassDetailApiByclass)
router.post("/subjectHeadApi", MasterController.subjectHeadApi)
router.get("/getAllsubjectHeadApi", MasterController.getAllsubjectHeadApi)
router.post("/getsubjectHeadApi", MasterController.getsubjectHeadApi)
router.post("/subjectApi", MasterController.subjectApi)
router.post("/getsubjectApi", MasterController.getsubjectApi)
router.get("/getAllsubjectApi", MasterController.getAllsubjectApi)
router.post("/subjecttoHeadApi", MasterController.subjecttoHeadApi)
router.get("/getAllsubjecttoHeadApi", MasterController.getAllsubjecttoHeadApi)
router.post("/getsubjecttoHeadApi", MasterController.getsubjecttoHeadApi)
router.post("/FeeFrequencyApi", MasterController.FeeFrequencyApi)
router.post("/getFeeFrequencyApi", MasterController.getFeeFrequencyApi)
router.post("/getAllFeeFrequencyApi", MasterController.getAllFeeFrequencyApi)

//teacher
router.post("/getEmployeeApi", getEmployeeApi)
router.post("/employeeApi",employeeApi)
router.post("/getEmployeeByIdApi",getEmployeeByIdApi)

module.exports=router