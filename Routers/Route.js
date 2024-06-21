const express = require('express');
const router  = express.Router();
const UserControll = require('../controllers/userControllers/UserControll')
const FileContrill = require('../controllers/userControllers/FileContrill')
const studentsController = require('../controllers/studentsController/studentsController')
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

module.exports=router