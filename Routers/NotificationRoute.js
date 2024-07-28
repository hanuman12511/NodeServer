const express = require('express');
const { 
    getstudentNotificationApi,
    getemployeeNotificationApi,
    NotificationApi,
    notificationUpdateApi,
    studentnotificationUpdateApi,
    NotificationByApi,
    NotificationAllApi,
    notificationByBranchApi} = require('../controllers/Notificaltion/NotificationController');
const notificaltionRoute = express.Router();


notificaltionRoute.post("/NotificationApi",NotificationApi)
notificaltionRoute.post("/getstudentNotificationApi",getstudentNotificationApi)
notificaltionRoute.post("/getemployeeNotificationApi", getemployeeNotificationApi)
notificaltionRoute.post("/NotificationByApi",NotificationByApi)
notificaltionRoute.post("/notificationUpdateApi",notificationUpdateApi)
notificaltionRoute.post("/studentnotificationUpdateApi",studentnotificationUpdateApi)
notificaltionRoute.post("/NotificationAllApi",NotificationAllApi)
notificaltionRoute.post("/notificationByBranchApi",notificationByBranchApi)

module.exports = notificaltionRoute