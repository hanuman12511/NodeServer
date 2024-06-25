const express = require('express');
const router  = express.Router();
const UserControll = require('../controllers/userControllers/UserControll')
const studentsController = require('../controllers/studentsController/studentsController')
const MasterController = require('../controllers/MasterController/MasterController')

//user

router.post("/loginuser", UserControll.userLogin )
router.post("/registeruser", UserControll.userRegister )

//students

router.post("/studentLogin", studentsController.studentLogin)
router.post("/StudentsApi", studentsController.studentsApi )
router.post("/studentFeeApi", studentsController.studentsFeeApi )
router.get("/getStudentsApi", studentsController.getStudentsApi )
router.post("/displayStudentsClassBy", studentsController.displayStudentsClassBy )
router.post("/studentAttendance", studentsController.studentAttendance )
router.get("/getstudentsFeeApi", studentsController.getstudentsFeeApi )
/* router.get("/uploadFileApi", studentsController.uploadExcelFile )
router.get("/downloadApi", studentsController.downloadApi )
 */

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
router.post("/getClassDetailApiByclass", MasterController.getClassDetailApiByclass)
router.post("/addBranch", MasterController.addBranchApi)
router.get("/getBranchApi", MasterController.getBranchApi)
router.post("/getBranchGroupIdApi", MasterController.getBranchGroupIdApi)
router.post("/getSessionByBranchIdApi", MasterController.getSessionByBranchIdApi)

module.exports=router