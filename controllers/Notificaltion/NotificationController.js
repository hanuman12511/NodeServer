const notification = require("../../models/Notification/NotificationStudent")



const NotificationApi = async (req, res, next) => {
    let result = ""
    console.log("ontis",req.body);
    if (req.body.date !== "") {
        let resp = await notification.find({ branchId: req.body.branchid })
        if (resp.length > 0) {
            let id = 0
            resp.map(d => {
                id = d.notificationId
            })
            id++
            const res = new notification({
                notificationId: id,
                branchId: req.body.branchid,
                groupId: req.body.groupid,
                sessionId: req.body.sessionid,
                date: req.body.date,
                data: req.body.data,
                 title: req.body.title,
                description: req.body.description,
                

            });
            res.save();
            result = { success: true, message: "notification add successfully", status: 200 }
        } else {
            const res = new notification({
                notificationId: 1,
                branchId: req.body.branchid,
                groupId: req.body.groupid,
                sessionId: req.body.sessionid,
                date: req.body.date,
                data: req.body.data,
                title: req.body.title,
                description: req.body.description,
              

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



const getemployeeNotificationApi = async (req, res, next) => {
    let resp = await notification.find({ branchId: req.body.branchId,"data.employeeId":req.body.employeeId }).then((res) => res)
   console.log(resp);
   let datap=[]
   resp.map(d=>{
    d.data.map(dd=>{
        if(dd.employeeId==req.body.employeeId)
            datap.push({notificationId:d.notificationId,branchId:d.branchId,date:d.date,...dd})
    })
   })

console.log("emp=>>",datap);
   if (resp.length > 0) {
        result = { success: true, message: "get successfully", status: 200, data: datap }
    }
    else {
        result = { success: false, message: "not  get", status: 200, data: resp }
    }

    res.json(result)
}


const notificationUpdateApi = async (req, res, next) => {
    let result = ""
    console.log(req.body);
    await notification.updateOne({  branchId: req.body.branchId,"data.employeeId":req.body.employeeId,notificationId:req.body.notificationId},
      {
             '$set': {
             'data.$.status': req.body.status,
     }
     },
     { upsert: true }
     ).then((res) => res).then((data) => {
         console.log("data return",data);
       
         if (data.modifiedCount > 0) {
             result = { success: true, message: " status update successfully", status: 200 }
         }
         else {
             result = { success: false, message: "status not update  ", status: 200 }
         }
     }) 
     res.json(result)
 }




 const getstudentNotificationApi = async (req, res, next) => {
    let resp = await notification.find({ branchId: req.body.branchId,"data.studentsId":req.body.studentId }).then((res) => res)
   console.log(resp);
   let datap=[]
   resp.map(d=>{
    d.data.map(dd=>{
        if(dd.studentsId==req.body.studentId)
            datap.push({notificationId:d.notificationId,branchId:d.branchId,date:d.date,...dd})
    })
   })

console.log("emp=>>",datap);
   if (resp.length > 0) {
        result = { success: true, message: "get successfully", status: 200, data: datap }
    }
    else {
        result = { success: false, message: "not  get", status: 200, data: resp }
    }

    res.json(result)
}


const studentnotificationUpdateApi = async (req, res, next) => {
    let result = ""
    console.log(req.body);
    await notification.updateOne({  branchId: req.body.branchId,"data.studentId":req.body.studentId,notificationId:req.body.notificationId},
      {
             '$set': {
             'data.$.status': req.body.status,
     }
     },
     { upsert: true }
     ).then((res) => res).then((data) => {
         console.log("data return",data);
       
         if (data.modifiedCount > 0) {
             result = { success: true, message: " status update successfully", status: 200 }
         }
         else {
             result = { success: false, message: "status not update  ", status: 200 }
         }
     }) 
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
   NotificationApi,
    getstudentNotificationApi,
    getstudentNotificationByStudentApi,
    getemployeeNotificationApi,
    notificationUpdateApi,
    studentnotificationUpdateApi
}