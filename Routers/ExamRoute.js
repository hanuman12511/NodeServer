const express = require('express');
const examRoute  = express.Router();
const { mainExamDataApi, internalExamDataApi, getMainExamDataApi, getMainExamDataControlApi, getInternalExamDataControlApi, getMainExamDataUpdateApi, getInternalExamDataUpdateApi, getInternalExamDataApi, getStudentMainExamMarksBySubjectApi, getInternalExamDataByStudentsApi, getMainExamDataByStudentsApi } = require('../controllers/MasterController/ExamController');
const { mainExamApi, internalExamApi, getMainExamApi, getMainExamControlApi, getInternalExamControlApi, getMainExamUpdateApi, getInternalExamUpdateApi, getInternalExamApi, MainExamMasterUpdateApi } = require('../controllers/MasterController/ExamControllerMaster');



examRoute.post("/mainExamDataApi",mainExamDataApi)
examRoute.post("/internalExamDataApi",internalExamDataApi)
examRoute.post("/getMainExamDataApi",getMainExamDataApi)
examRoute.post("/getMainExamDataControlApi",getMainExamDataControlApi)
examRoute.post("/getInternalExamDataControlApi",getInternalExamDataControlApi)
examRoute.post("/getMainExamDataUpdateApi",getMainExamDataUpdateApi),
examRoute.post("/getInternalExamDataUpdateApi",getInternalExamDataUpdateApi),
examRoute.post("/getInternalExamDataApi",getInternalExamDataApi),
examRoute.post("/mainExamApi",mainExamApi),
examRoute.post("/internalExamApi",internalExamApi),
examRoute.post("/getMainExamApi",getMainExamApi),
examRoute.post("/getMainExamControlApi",getMainExamControlApi),
examRoute.post("/getInternalExamControlApi",getInternalExamControlApi),
examRoute.post("/getMainExamUpdateApi",getMainExamUpdateApi),
examRoute.post("/getInternalExamApi",getInternalExamApi)
examRoute.post("/getInternalExamUpdateApi",getInternalExamUpdateApi)
examRoute.post("/getStudentMainExamMarksBySubjectApi",getStudentMainExamMarksBySubjectApi)
examRoute.post("/getInternalExamDataByStudentsApi",getInternalExamDataByStudentsApi)
examRoute.post("/getMainExamDataByStudentsApi",getMainExamDataByStudentsApi)
    

module.exports=examRoute