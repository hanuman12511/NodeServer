const express = require('express');
const { 
    getstudentNotificationApi,
    getemployeeNotificationApi,
    NotificationApi,
    notificationUpdateApi,
    studentnotificationUpdateApi,
    NotificationByApi,
    NotificationAllApi,
    notificationByBranchApi,
    holidayApi,
    getHolidayApi,
    getNewsApi,
    NewsApi,
    leaveapplicationApi,
    getLeaveApi,
    leaveapplicationfileApi} = require('../controllers/Notificaltion/NotificationController');
const notificaltionRoute = express.Router();


notificaltionRoute.post("/NotificationApi",NotificationApi)
notificaltionRoute.post("/getstudentNotificationApi",getstudentNotificationApi)
notificaltionRoute.post("/getemployeeNotificationApi", getemployeeNotificationApi)
notificaltionRoute.post("/NotificationByApi",NotificationByApi)
notificaltionRoute.post("/notificationUpdateApi",notificationUpdateApi)
notificaltionRoute.post("/studentnotificationUpdateApi",studentnotificationUpdateApi)
notificaltionRoute.post("/NotificationAllApi",NotificationAllApi)
notificaltionRoute.post("/notificationByBranchApi",notificationByBranchApi)
notificaltionRoute.post("/holidayApi",holidayApi)
notificaltionRoute.post("/getHolidayApi",getHolidayApi)
notificaltionRoute.post("/NewsApi",NewsApi)
notificaltionRoute.post("/getNewsApi",getNewsApi)
notificaltionRoute.post("/leaveapplicationApi",leaveapplicationApi)
notificaltionRoute.post("/getLeaveApi",getLeaveApi)
notificaltionRoute.post("/leaveapplicationfileApi",leaveapplicationfileApi)

module.exports = notificaltionRoute


