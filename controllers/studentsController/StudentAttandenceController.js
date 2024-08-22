
const ClassDetails = require("../../models/ClassDetails")
const Student = require("../../models/Student")
const studentAttandence = require("../../models/Students/studentAttendence")

const attandenceApi = async (req, res, next) => {
    let result = ""
    let status = false
    console.log("add atten", req.body);
    if (req.body.date !== "") {


        await studentAttandence.find({ date: req.body.date, class: req.body.class, branchId: req.body.branchid, sessionId: req.body.sessionId }).then(async (res) => {
            if (res.length > 0) {
                result = { success: false, message: "date exites", status: 200 }
            }
            else {
                const res = new studentAttandence({
                    class: req.body.class,
                    AttendenceType: req.body.AttendenceType,
                    branchId: req.body.branchid,
                    date: req.body.date,
                    data: req.body.data,
                    sessionId: req.body.sessionId,
                    statusatt: true

                });
                res.save();
                result = { success: true, message: "  create  successfully", status: 200 }
            }
        })
    }
    else {
        result = { success: false, message: " ple date add", status: 200 }
    }

    res.json(result)
}


const getAttandenceApi = async (req, res, next) => {
    await studentAttandence.find({ branchId: req.body.branchid }).then((res) => res)
    await studentAttandence.find({ branchId: req.body.branchid, date: req.body.date }).then((res) => {
        if (res.length > 0) {
            result = { success: true, message: "get successfully", status: 200, data: res }
        }
        else {
            result = { success: false, message: "not  get", status: 200, data: res }
        }

    })
    res.json(result)
}


const AddAttandenceApi = async (req, res, next) => {
    console.log("get api data 1=>>", req.body);
    await studentAttandence.insertMany(req.body).then((res) => {
        console.log("multy", res);
    })
    res.json("result")
}

const getAttandenceBranchbyApi = async (req, res, next) => {
    let datar = []

    let resp = await studentAttandence.find({ branchId: req.body.branchid, date: req.body.date, "data.Class": req.body.classsection, sessionId: req.body.session }).then((res) => res)
    if (resp.length > 0) {

        let datar1 = resp.map(d => {
            let data1 = []
            if (req.body.date == d.date) {
                return d.data.map(dd => {
                    return { ...dd, ...d._doc }
                })


            }

        })


        datar = datar1[0]

    }
    else {
        let res1 = await Student.find({ branchId: req.body.branchid, sessionName: req.body.session }).then((res) => res)
        let resp = await ClassDetails.find({ branchid: req.body.branchid, sessionId: req.body.session, classsection: req.body.classsection }).then((res) => res)

        console.log("class", resp);
        let datar1 = res1.map(d => {
            let classname = ""
            resp.map(classdaat => {

                if (d.ClassSection == classdaat.classDetailId) {
                    classname = classdaat.classsection
                }
            })
            return { statusatt: false, Class: classname, studentsId: d.studentsId, firstName: d.FirstName, lastName: d.LastName, fatherName: d.FName, isChecked: false, intime: "--:--", outtime: "--:--", isInTime: false, isOutTime: false, ontime: "08:00", offtime: "02:00", AttendenceType: "Manual" }
        })
        let data = []
        datar1.map(dd => {
            if (dd.Class == req.body.classsection) {
                data.push({ ...dd })
            }
        })
        datar = data
    }


    if (datar.length > 0) {
        result = { success: true, message: "get successfully", status: 200, data: datar }
    }
    else {
        result = { success: false, message: "not  get", status: 200, data: [] }
    }
    res.json(result)
}

const getstudentAttandenceUpdateApi = async (req, res, next) => {
    let result = ""
    console.log(req.body);
    await studentAttandence.updateOne({ branchId: req.body.branchid, date: req.body.date, "data.studentsId": req.body.studentsId },
        {
            '$set': {
                'data.$.isChecked': req.body.isChecked,

            }
        },
        { upsert: true }
    ).then((res) => res).then((data) => {
        console.log("data return", data);

        if (data.modifiedCount > 0) {
            result = { success: true, message: " update successfully", status: 200 }
        }
        else {
            result = { success: false, message: " update not ", status: 200 }
        }
    })
    res.json(result)
}
const months = [
    { label: "January", value: "1", monthday: 31 },
    { label: "February", value: "2", monthday: 28 },
    { label: "March", value: "3", monthday: 31 },
    { label: "April", value: "4", monthday: 30 },
    { label: "May", value: "5", monthday: 31 },
    { label: "June", value: "6", monthday: 30 },
    { label: "July", value: "7", monthday: 31 },
    { label: "August", value: "8", monthday: 31 },
     { label: "September", value: "9", monthday: 30 },
    { label: "October", value: "10", monthday: 31 },
    { label: "November", value: "11", monthday: 30 },
    { label: "December", value: "12", monthday: 31 } 
]

const moment = require('moment');
moment.suppressDeprecationWarnings = true;
const getstudentAttandenceApi = async (req, res, next) => {
    let year = 2024
    let attendance = []
    const url = "https://calendar-json-app.adaptable.app/fullyear/" + year;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();

        attendance = json
    } catch (error) {
        console.error(error.message);
    }

    let att = []
    let day1 = ["S", "M", "T", "W", "Th", "F", "St"]
    months.map(d => {

        let day = []
        attendance[d.label].map(l => {
            let week = [];

            l.map((ll, index) => {
                if (day1[index] != "S") {
                    week.push({ "date": ll, "day": day1[index], "re": "A" })
                }
                else {
                    week.push({ "date": ll, "day": day1[index], "re": "-" })
                }

            })

            day.push(...week)
        })
        att.push({ "modth": d.label, "day": day, monthnum: d.value })
    })



    let data = []
    att.map(d => {
        let P = 0;
        let A = 0;
        d.day.map(ss => {


            if (ss.date != 0 && ss.day != "S" && ss.re == "A") {
                A++
            }

        })
        data.push({ ...d, "P": P, "A": A })
    })
   

    let result = ""
    const { studentsId,
        groupId,
        branchId,
        session } = req?.body

let attdata = []
    await studentAttandence.find({ branchId: branchId, "data.studentsId": studentsId }).then((res) => res).then((data) => {
        data.map(s => {
            s.data.map(d => {
                if (d.studentsId == studentsId) {

                    attdata.push({ "date": s.date, "isChecked": d.isChecked, })
                }
            })
        })
    })
let datafinalatt=[]
    data.map(data=>{
        let dataatt1=data.day
        let mday
        mday=[]
        attdata.map(att=>{
            let datedata = att.date.split("-")
            let day1 = datedata[0]
            let month1 = datedata[1]
            let year1 = datedata[2]
           
            if(data.monthnum== parseInt(month1)){
                data.day.map(date=>{
                    if(date.date==parseInt(day1)){
                        mday.push({...date,"re":"P"})
                    }
                   
                })
            }

        })
      
    const map = new Map([...dataatt1, ...mday]
        .map(obj => [obj.date, obj]));
        
    const mergedArray = Array.from(map.values());datafinalatt.push({months:data.modth,day:mergedArray,monthnum:data.monthnum})
    })
   
            if (datafinalatt.length > 0) {
                result = { success: true, message: "attendence get successfully", status: 200 ,data:datafinalatt}
            }
            else {
                result = { success: false, message: "attendence not get successfully", status: 200 }
            }
   
    res.json( result)
}




module.exports = {
    attandenceApi,
    getAttandenceApi,
    getstudentAttandenceUpdateApi,
    getAttandenceBranchbyApi,
    AddAttandenceApi,
    getstudentAttandenceApi
}