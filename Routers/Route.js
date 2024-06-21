const express = require('express');
const router  = express.Router();
const UserControll = require('../controllers/userControllers/UserControll')
const FileContrill = require('../controllers/userControllers/FileContrill')
const studentsController = require('../controllers/studentsController/studentsController')
const MasterController = require('../controllers/MasterController/MasterController')
router.post("/loginuser", UserControll.userLogin )
router.post("/registeruser", UserControll.userRegister )
router.post("/studentadd", UserControll.studentsAdd )
router.get("/test", UserControll.TestApi )
router.post("/file", FileContrill.upload )
//students

router.post("/students", studentsController.students )
router.post("/studentFee", studentsController.studentsFee )
router.get("/allStudentDisplay", studentsController.allStudentDisplay )
router.post("/displayStudentsClassBy", studentsController.displayStudentsClassBy )
router.post("/studentAttendance", studentsController.studentAttendance )

// master

router.post("/feeheadApi", MasterController.feeHeadApi)
router.get("/getfeeHeadApi", MasterController.getfeeHeadsApi)
router.post("/sessionApi", MasterController.sessionApi)
router.get("/getSessionApi", MasterController.getSessionApi)
router.post("/classApi", MasterController.classApi)
router.get("/getClassApi", MasterController.getClassApi)
router.get("/getSectionApi", MasterController.getSectionApi)
router.post("/SectionApi", MasterController.SectionApi)
router.post("/classDetailsApi", MasterController.ClassDetailApi)
router.get("/getclassDetailsApi", MasterController.getClassDetailApi)

module.exports=router