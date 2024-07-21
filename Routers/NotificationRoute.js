const express = require('express');
const { studentNotificationApi,
    getstudentNotificationApi,
    getstudentNotificationByStudentApi } = require('../controllers/Notificaltion/NotificationController');
const notificaltionRoute = express.Router();


notificaltionRoute.post("/studentNotificationApi",studentNotificationApi)
notificaltionRoute.post("/getstudentNotificationApi",getstudentNotificationApi)
notificaltionRoute.post("/getstudentNotificationByStudentApi",getstudentNotificationByStudentApi)

module.exports = notificaltionRoute