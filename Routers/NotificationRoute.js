const express = require('express');
const { 
    getstudentNotificationApi,
    getstudentNotificationByStudentApi, 
    getemployeeNotificationApi,
    NotificationApi,
    notificationUpdateApi,
    studentnotificationUpdateApi} = require('../controllers/Notificaltion/NotificationController');
const notificaltionRoute = express.Router();


notificaltionRoute.post("/NotificationApi",NotificationApi)
notificaltionRoute.post("/getstudentNotificationApi",getstudentNotificationApi)
notificaltionRoute.post("/getemployeeNotificationApi", getemployeeNotificationApi)
notificaltionRoute.post("/getstudentNotificationByStudentApi",getstudentNotificationByStudentApi)
notificaltionRoute.post("/notificationUpdateApi",notificationUpdateApi)
notificaltionRoute.post("/studentnotificationUpdateApi",studentnotificationUpdateApi)

module.exports = notificaltionRoute