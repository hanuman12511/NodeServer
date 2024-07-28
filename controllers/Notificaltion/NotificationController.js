const notification = require("../../models/Notification/NotificationStudent")
const multer = require('multer')
const path = require('path');
var ext = ""
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Uploads is the Upload_folder_name
        cb(null, "public/uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + "-"+file.originalname);
    },
});

// Define the maximum size for uploading
// picture i.e. 1 MB. it is optional
const maxSize = 1 * 1000 * 1000;

var upload = multer({
    storage: storage,
    limits: { fileSize: maxSize },
    fileFilter: function (req, file, cb) {
        // Set the filetypes, it is optional
        var filetypes = /jpeg|jpg|png|pdf|doc|xlsx/;
        var mimetype = filetypes.test(file.mimetype);

        var extname = filetypes.test(
            path.extname(file.originalname).toLowerCase()
        );
        ext = extname
        if (mimetype && extname) {
            return cb(null, true);
        }

        cb(
            "Error: File upload only supports the " +
            "following filetypes - " +
            filetypes
        );
    },

    // mypic is the name of file attribute
}).single("file");

const NotificationAllApi = async (req, res, next) => {
    upload(req, res, async function (err) {
        if (err) {

            res.send(err);
        } else {

            let result = ""
            console.log("ontis", req?.body)
            console.log("ontis file", req?.file)
            console.log("ontis",JSON.parse(req?.body?.params)) 
            const { status,
                statustype,
                branchid,
                groupid,
                sessionid,
                date,
                title,
                description } = JSON.parse(req?.body?.params)
            if (date !== "") {
                let resp = await notification.find({ branchId: branchid })
                if (resp.length > 0) {
                    let id = 0
                    resp.map(d => {
                        id = d.notificationId
                    })
                    id++
                    const res = new notification({
                        notificationId: id,
                        branchId: branchid,
                        groupId: groupid,
                        sessionId: sessionid,
                        date: date,
                        title: title,
                        description: description,
                        filename: req.file==undefined?"":req.file.filename,
                        status: status,
                        statustype: statustype
                    });
                    res.save();
                    result = { success: true, message: "notification add successfully", status: 200 }
                } else {
                    const res = new notification({
                        notificationId: 1,
                        branchId: branchid,
                        groupId: groupid,
                        sessionId: sessionid,
                        date: date,
                        title: title,
                        description: description,
                        filename: req.file==undefined?"":req.file.filename,
                        status: status,
                        statustype: statustype


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
    });
}


const NotificationApi = async (req, res, next) => {
   
            
        let result = ""
    
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
    let resp = await notification.find({ branchId: req.body.branchId, "data.employeeId": req.body.employeeId }).then((res) => res)
    console.log(resp);
    let datap = []
    resp.map(d => {
        d.data.map(dd => {
            if (dd.employeeId == req.body.employeeId)
                datap.push({ notificationId: d.notificationId, branchId: d.branchId, date: d.date, ...dd })
        })
    })

    console.log("emp=>>", datap);
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
    await notification.updateOne({ branchId: req.body.branchId, "data.employeeId": req.body.employeeId, notificationId: req.body.notificationId },
        {
            '$set': {
                'data.$.status': req.body.status,
            }
        },
        { upsert: true }
    ).then((res) => res).then((data) => {
        console.log("data return", data);

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
    let resp = await notification.find({ branchId: req.body.branchId, "data.studentsId": req.body.studentId }).then((res) => res)
    console.log(resp);
    let datap = []
    resp.map(d => {
        d.data.map(dd => {
            if (dd.studentsId == req.body.studentId)
                datap.push({ notificationId: d.notificationId, branchId: d.branchId, date: d.date, ...dd })
        })
    })

    console.log("emp=>>", datap);
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
    await notification.updateOne({ branchId: req.body.branchId, "data.studentId": req.body.studentId, notificationId: req.body.notificationId },
        {
            '$set': {
                'data.$.status': req.body.status,
            }
        },
        { upsert: true }
    ).then((res) => res).then((data) => {
        console.log("data return", data);

        if (data.modifiedCount > 0) {
            result = { success: true, message: " status update successfully", status: 200 }
        }
        else {
            result = { success: false, message: "status not update  ", status: 200 }
        }
    })
    res.json(result)
}

const NotificationByApi = async (req, res, next) => {

    console.log(req.body);

    let resp = await notification.find({ branchId: req.body.branchid, status: req.body.status }).then((res) => res)

    console.log(resp);


    if (resp.length > 0) {
        result = { success: true, message: "get successfully", status: 200, data: resp }
    }
    else {
        result = { success: false, message: "not  get", status: 200, data: resp }
    }

    res.json(result)
}
const notificationByBranchApi = async (req, res, next) => {

    console.log(req.body);

    let resp = await notification.find({ branchId: req.body.branchid }).then((res) => res)

    console.log(resp);


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
    NotificationByApi,
    getemployeeNotificationApi,
    notificationUpdateApi,
    studentnotificationUpdateApi,
    NotificationAllApi,
    notificationByBranchApi
}