const studentnotification = require("../../models/Notification/NotificationStudent")

const feeHeadApi = async (req, res, next) => {
    let result = ""
    let status = false
    if (req.body.feeheadname !== "" && req.body.feefrequency !== "") {
        let resp = await FeeHeads.find({}).then((res) => res)
        if (resp.length > 0) {
            let id = 0
            resp.map(d => {
                id = d.feeHeadId
            })
            id++
            const res = new FeeHeads({

                FeeHead: req.body.feehead,
                branchid: req.body.branchid,
                groupid: req.body.groupid,
                feeHeadId: id,
                FeeFrequencyId: req.body.feefrequency,
                Display: req.body.Display
            });
            res.save();
            status = true
        }
        else {
            const res = new FeeHeads({

                FeeHead: req.body.feehead,
                branchid: req.body.branchid,
                groupid: req.body.groupid,
                feeHeadId: 1,
                FeeFrequencyId: req.body.feefrequency,

                Display: req.body.Display

            });
            res.save();

            status = true
        }
    }
    else {
        result = { success: false, message: " pls insert Data", status: 200 }
    }
    if (status) {
        result = { success: true, message: " fee head create  successfully", status: 200 }
    }
    else {
        result = { success: false, message: " fee head not create", status: 200 }
    }

    res.json(result)
}


const studentNotificationApi = async (req, res, next) => {
    let result = ""
    if (req.body.date !== "") {
        let resp = await studentnotification.find({ branchId: req.body.branchid })
        if (resp.length > 0) {
            let id = 0
            resp.map(d => {
                id = d.notificationId
            })
            id++
            const res = new studentnotification({
                notificationId: id,
                branchId: req.body.branchid,
                groupId: req.body.groupid,
                sessionId: req.body.sessionid,
                date: req.body.date,
                data: req.body.data,
                status:"yes"

            });
            res.save();
            result = { success: true, message: "notification add successfully", status: 200 }
        } else {
            const res = new studentnotification({
                notificationId: 1,
                branchId: req.body.branchid,
                groupId: req.body.groupid,
                sessionId: req.body.sessionid,
                date: req.body.date,
                data: req.body.data,
                status:"yes"

            });
            res.save();
            result = { success: true, message: "notification add successfully", status: 200 }
        }
    }
    else {
        result = { success: false, message: " pls fill data", status: 200 }
    }

    res.json(result)
}


const getstudentNotificationApi = async (req, res, next) => {
    let resp = await studentnotification.find({ branchId: req.body.branchid }).then((res) => res)
    if (resp.length > 0) {
        result = { success: true, message: "get successfully", status: 200, data: resp }
    }
    else {
        result = { success: false, message: "not  get", status: 200, data: resp }
    }

    res.json(result)
}
const getstudentNotificationByStudentApi = async (req, res, next) => {
    let resp = await studentnotification.find({ branchId: req.body.branchid }).then((res) => res)
    console.log("students=>>notice",resp);
    if (resp.length > 0) {
        result = { success: true, message: "get successfully", status: 200, data: resp }
    }
    else {
        result = { success: false, message: "not  get", status: 200, data: resp }
    }

    res.json(result)
}

module.exports = {
    studentNotificationApi,
    getstudentNotificationApi,
    getstudentNotificationByStudentApi
}