const notification = require("../../models/Notification/NotificationStudent")
const multer = require('multer')
const path = require('path');
const addHolidayList = require("../../models/addHolidayList");
const addnews = require("../../models/addnews");
const addLeave = require("../../models/addLeave");
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

    if(req.file==undefined){
        const { status,
            statustype,
            branchid,
            groupid,
            sessionid,
            date,
            title,
            description } = req?.body
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
                  
                    status: status,
                    statustype: statustype,
                    readstatus:"no"
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
                   
                    status: status,
                    statustype: statustype,
                    readstatus:"no"


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
    
    else{
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
                        statustype: statustype,
                        readstatus:"no"
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
                        statustype: statustype,
                        readstatus:"no"


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




}


const holidayApi = async (req, res, next) => {

    if(req.file==undefined){
        const { 
            branchid,
            groupid,
            sessionid,
            startdate,
            enddate,
            title,
            description } = req?.body
        if (startdate !== "") {
            let resp = await addHolidayList.find({ branchId: branchid })
            if (resp.length > 0) {
                let id = 0
                resp.map(d => {
                    id = d.holidayId
                })
                id++
                const res = new addHolidayList({
                    holidayId: id,
                        branchId: branchid,
                        groupId: groupid,
                        sessionId: sessionid,
                        startdate: startdate,
                        enddate: enddate,
                        title: title,
                        description: description,
                       
                });
                res.save();
                result = { success: true, message: "holiday add successfully", status: 200 }
            } else {
                const res = new addHolidayList({
                    holidayId: 1,
                        branchId: branchid,
                        groupId: groupid,
                        sessionId: sessionid,
                        startdate: startdate,
                        enddate: enddate,
                        title: title,
                        description: description,
                       
                   
                  


                });
                res.save();
                result = { success: true, message: "holiday add successfully", status: 200 }
            }
        }
        else {
            result = { success: false, message: " pls fill data", status: 200 }
        }

        res.json(result)
    }
    
    else{


    upload(req, res, async function (err) {
        if (err) {

            res.send(err);
        } else {

            let result = ""
            
            const { 
                branchid,
                groupid,
                sessionid,
                startdate,
                enddate,
                title,
                description } = JSON.parse(req?.body?.params)
            if (startdate !== "") {
                let resp = await addHolidayList.find({ branchId: branchid })
                if (resp.length > 0) {
                    let id = 0
                    resp.map(d => {
                        id = d.holidayId
                    })
                    id++
                    const res = new addHolidayList({
                        holidayId: id,
                        branchId: branchid,
                        groupId: groupid,
                        sessionId: sessionid,
                        startdate: startdate,
                        enddate: enddate,
                        title: title,
                        description: description,
                        filename:req.file.filename,
                    });
                    res.save();
                    result = { success: true, message: "holiday add successfully", status: 200 }
                } else {
                    const res = new addHolidayList({
                        holidayId: 1,
                        branchId: branchid,
                        groupId: groupid,
                        sessionId: sessionid,
                        startdate: startdate,
                        enddate: enddate,
                        title: title,
                        description: description,
                        filename:req.file.filename,
                        
                    });
                    res.save();
                    result = { success: true, message: "holiday add successfully", status: 200 }
                }
            }
            else {
                result = { success: false, message: " pls fill data", status: 200 }
            }

            res.json(result)
        }
    });

    }
}


const getHolidayApi = async (req, res, next) => {
    let resp = await addHolidayList.find({ branchId: req.body.branchid,}).then((res) => res)
    if (resp.length > 0) {
        result = { success: true, message: "get successfully", status: 200, data: resp }
    }
    else {
        result = { success: false, message: "not  get", status: 200, data: resp }
    }
    res.json(result)
}






const NewsApi = async (req, res, next) => {

    if(req.file==undefined){
        const { 
            branchid,
            groupid,
            sessionid,
            startdate,
            enddate,
            title,
            description } = req?.body
        if (startdate !== "") {
            let resp = await addnews.find({ branchId: branchid })
            if (resp.length > 0) {
                let id = 0
                resp.map(d => {
                    id = d.newsId
                })
                id++
                const res = new addnews({
                    newsId: id,
                        branchId: branchid,
                        groupId: groupid,
                        sessionId: sessionid,
                        startdate: startdate,
                        enddate: enddate,
                        title: title,
                        description: description,
                       
                });
                res.save();
                result = { success: true, message: "addnews add successfully", status: 200 }
            } else {
                const res = new addnews({
                    newsId: 1,
                        branchId: branchid,
                        groupId: groupid,
                        sessionId: sessionid,
                        startdate: startdate,
                        enddate: enddate,
                        title: title,
                        description: description,
                       
                   
                  


                });
                res.save();
                result = { success: true, message: "addnews add successfully", status: 200 }
            }
        }
        else {
            result = { success: false, message: " pls fill data", status: 200 }
        }

        res.json(result)
    }
    
    else{


    upload(req, res, async function (err) {
        if (err) {

            res.send(err);
        } else {

            let result = ""
            
            const { 
                branchid,
                groupid,
                sessionid,
                startdate,
                enddate,
                title,
                description } = JSON.parse(req?.body?.params)
            if (startdate !== "") {
                let resp = await addnews.find({ branchId: branchid })
                if (resp.length > 0) {
                    let id = 0
                    resp.map(d => {
                        id = d.newsId
                    })
                    id++
                    const res = new addnews({
                        holidayId: id,
                        branchId: branchid,
                        groupId: groupid,
                        sessionId: sessionid,
                        startdate: startdate,
                        enddate: enddate,
                        title: title,
                        description: description,
                        filename:req.file.filename,
                    });
                    res.save();
                    result = { success: true, message: "holiday add successfully", status: 200 }
                } else {
                    const res = new addnews({
                        newsId: 1,
                        branchId: branchid,
                        groupId: groupid,
                        sessionId: sessionid,
                        startdate: startdate,
                        enddate: enddate,
                        title: title,
                        description: description,
                        filename:req.file.filename,
                        
                    });
                    res.save();
                    result = { success: true, message: "holiday add successfully", status: 200 }
                }
            }
            else {
                result = { success: false, message: " pls fill data", status: 200 }
            }

            res.json(result)
        }
    });

    }
}


const getNewsApi = async (req, res, next) => {
    let resp = await addnews.find({ branchId: req.body.branchid,}).then((res) => res)
    if (resp.length > 0) {
        result = { success: true, message: "get successfully", status: 200, data: resp }
    }
    else {
        result = { success: false, message: "not  get", status: 200, data: resp }
    }
    res.json(result)
}



const leaveapplicationApi = async (req, res, next) => {

        const {
            personId,
            persontype, 
            branchid,
            groupid,
            sessionid,
            startdate,
            enddate,
            title,
            status,
            description } = req?.body
        if (startdate !== "") {
            let resp = await addLeave.find({ branchId: branchid })
            if (resp.length > 0) {
                let id = 0
                resp.map(d => {
                    id = d.leaveId
                })
                id++
                const res = new addLeave({
                    leaveId: id,
                    branchId: branchid,
                    groupId: groupid,
                    sessionId: sessionid,
                    startdate: startdate,
                    enddate: enddate,
                    title: title,
                    description: description,
                    status:status,
                    personId,
                    persontype,
                    filename:"",
                    leavestatus:"panding"
                });
                res.save();
                result = { success: true, message: "leave add successfully", status: 200 }
            } else {
                const res = new addLeave({
                    leaveId: 1,
                    branchId: branchid,
                    groupId: groupid,
                    sessionId: sessionid,
                    startdate: startdate,
                    enddate: enddate,
                    title: title,
                    description: description,
                    status:status,
                    personId,
                    persontype,
                    filename:"",
                    leavestatus:"panding"
                   
                  


                });
                res.save();
                result = { success: true, message: "leaveadd successfully", status: 200 }
            }
        }
        else {
            result = { success: false, message: " pls fill data", status: 200 }
        }

        res.json(result)
    
    
  
        
    

    
}


const leaveapplicationfileApi = async (req, res, next) => {

    console.log("req.file",req.file);
    console.log("req.body",req.body);

    upload(req, res, async function (err) {

        
        if (err) {

            res.send(err);
        } else {
            console.log("req.file",req.file);
            console.log("req.body",req.body);
            let result = ""
            
            const { 
                personId,
                persontype,
                branchid,
                groupid,
                sessionid,
                startdate,
                enddate,
                title,
                status,
                description 
            } = JSON.parse(req?.body?.params)
            if (startdate !== "") {
                let resp = await addLeave.find({ branchId: branchid })
                if (resp.length > 0) {
                    let id = 0
                    resp.map(d => {
                        id = d.leaveId
                    })
                    id++
                    const res = new addLeave({
                        leaveId: id,
                        branchId: branchid,
                        groupId: groupid,
                        sessionId: sessionid,
                        startdate: startdate,
                        enddate: enddate,
                        title: title,
                        status:status,
                        description: description,
                        filename:req.file.filename,
                        personId,
                        persontype,
                        leavestatus:"panding"
                    });
                    res.save();
                    result = { success: true, message: "leave with doc add successfully", status: 200 }
                } else {
                    const res = new addLeave({
                        leaveId: 1,
                        branchId: branchid,
                        groupId: groupid,
                        sessionId: sessionid,
                        startdate: startdate,
                        enddate: enddate,
                        title: title,
                        status: status,
                        description: description,
                        filename:req.file.filename,
                        personId,
                        persontype,
                        leavestatus:"panding"
                        
                    });
                    res.save();
                    result = { success: true, message: "leave with doc add successfully", status: 200 }
                }
            }
            else {
                result = { success: false, message: " pls fill data", status: 200 }
            }

            res.json(result)
        }
    });

    
}

const getLeaveApi = async (req, res, next) => {
    const {branchid,personId,status} = req?.body
    console.log(req.body);
    let resp = await addLeave.find({ branchId:branchid,personId:personId,status:status}).then((res) => res)
    console.log(resp);
    if (resp.length > 0) {
        result = { success: true, message: "get successfully", status: 200, data: resp }
    }
    else {
        result = { success: false, message: "not  get", status: 200, data: resp }
    }
    res.json(result)
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
                readstatus:"no"
               
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
                readstatus:"no"
              

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

    console.log(req.body);
    const {branchId,employeeId,depratmentid, status}=req?.body 
    let resp= await notification.find({branchId:branchId, status: status}).then((res) => res)
    console.log(resp);
    let statustype=[]
    
    if(resp.length>0){
        resp.map(n=>{
            if(n.statustype==0){
                statustype.push(n)
            }
        })
    }
    let statusdpt=[]
    if(resp.length>0){
        
        resp.map(n=>{
            if(n.statustype==depratmentid){
                statusdpt.push(n)
            }
        })
    }
    
console.log("statustype",statustype);    
console.log(" statusdpt", statusdpt);    
    let resp1 = await notification.find({ branchId:branchId,  "data.employeeId": req.body.employeeId }).then((res) => res)
   
    let datap = []
    datap.push({ common:statustype, depratment:statusdpt})
    let empdata=[]
    resp1.map(d => {
        d.data.map(dd => {
            if (dd.employeeId == employeeId)
                empdata.push({ notificationId: d.notificationId, branchId: d.branchId, date: d.date, ...dd })
        })
    }) 
datap.push({empdata:empdata})
 
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
   /*  let resp = await notification.find({ branchId: req.body.branchId, "data.studentsId": req.body.studentId }).then((res) => res) */
   
    console.log(req.body);
  
    const { branchId, studentId,ClassSection, status}=req?.body 
    let resp= await notification.find({branchId:branchId, status: status}).then((res) => res)
    console.log(resp);
    let statustype=[]
    
    if(resp.length>0){
        resp.map(n=>{
            if(n.statustype==0){
                statustype.push(n)
            }
        })
    }
    let statusdpt=[]
    if(resp.length>0){
        
        resp.map(n=>{
            if(n.statustype==ClassSection){
                statusdpt.push(n)
            }
        })
    }
    
console.log("statustype",statustype);    
console.log(" statusdpt", statusdpt);    
    let resp1 = await notification.find({ branchId:branchId,  "data.studentId": studentId }).then((res) => res)
   
    let datap = []
    datap.push({ common:statustype, depratment:statusdpt})
    let empdata=[]
    resp1.map(d => {
        d.data.map(dd => {
            if (dd.studentId == studentId)
                empdata.push({ notificationId: d.notificationId, branchId: d.branchId, date: d.date, ...dd })
        })
    }) 
datap.push({empdata:empdata})
 
console.log("student notification ",datap);
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
    notificationByBranchApi,
    holidayApi,
    getHolidayApi,
    NewsApi,
getNewsApi,
leaveapplicationApi,
getLeaveApi,
leaveapplicationfileApi
}