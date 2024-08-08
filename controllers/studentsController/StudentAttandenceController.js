
const ClassDetails = require("../../models/ClassDetails")
const Student = require("../../models/Student")
const studentAttandence = require("../../models/Students/studentAttendence")

const attandenceApi = async (req, res, next) => {
    let result = ""
    let status = false
    if (req.body.date !== "") {
        await studentAttandence.find({ date: req.body.date, branchId: req.body.branchid }).then(async (res) => {
            if (res.length > 0) {
                result = { success: false, message: "date exites", status: 200 }
            }
            else {
                const res = new studentAttandence({
                    AttendenceType: req.body.AttendenceType,
                    branchId: req.body.branchid,
                    date: req.body.date,
                    data: req.body.data

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
console.log(req.body);
    let resp = await studentAttandence.find({ branchId: req.body.branchid, date: req.body.date,"data.Class" :req.body.classsection,sessionId:req.body.session}).then((res) => res)
   console.log("=>>",resp);
    let res1 = await Student.find({ branchId: req.body.branchid ,sessionName:req.body.session}).then((res) => res)
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
         let resp = await ClassDetails.find({ branchid: req.body.branchid,sessionId:req.body.session,classsection:req.body.classsection }).then((res) => res)
        datar = res1.map(d => {
            let classname = ""
            resp.map(classdaat => {
                if (d.ClassSection == classdaat.classDetailId) {
                    classname = classdaat.classsection
                }
            })
            return { Class: classname, studentsId: d.studentsId, firstName: d.FirstName, lastName: d.LastName, fatherName: d.FName, isChecked: false, intime: "--:--", outtime: "--:--", isInTime: false, isOutTime: false, ontime: "08:00", offtime: "02:00", AttendenceType: "Manual" }
        })
    }
    if (resp.length > 0) {
        result = { success: true, message: "get successfully", status: 200, data: datar }
    }
    else {
        result = { success: false, message: "not  get", status: 200, data: datar }
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
const getstudentAttandenceApi = async (req, res, next) => {
    let result = ""
    console.log(req.body);
    await studentAttandence.find({ branchId: req.body.branchId, "data.studentsId": req.body.studentsId }).then((res) => res).then((data) => {
        console.log("att=>>", data);
        console.log("************************");
        /* const dateObj = new Date();
        const month   = dateObj.getUTCMonth() + 1; // months from 1-12
        const day     = dateObj.getUTCDate();
        const year    = dateObj.getUTCFullYear();
        console.log(day,"+",month,"+",year); */
        /* let attenstu=[
           {
               months:"",present:"",absence:"",date:[
                   {date:"",present:"",absence:""}
               ]
           }
       ] */
        let dataatt = []
        data.map(d => {
            console.log(d.date);
            let month = {}
            months.map(mo => {
                if (mo.value == parseInt(d.date.split("-")[1].split("-")[0])) {
                    console.log(d.date);
                    let countp = 0
                    let counta = 0
                    for (i = 1; i <= mo.monthday; i++) {
                        d.data.map(s => {
                            console.log(d.date);
                            if (s.studentsId == req.body.studentsId) {
                               
                                if (s.isChecked) {
                                    console.log(s.isChecked);
                                    countp++
                                }
                                else {
                                    counta++
                                }
                            }
                        })
                    }

                    month = { monthname: mo.label, p: countp, A: counta }

                }


            })
            dataatt.push(month)
        })


        console.log("***********************");
        console.log(dataatt);
        console.log("***********************");
        if (data.length > 0) {
            result = { success: true, message: "attendence get successfully", status: 200 }
        }
        else {
            result = { success: false, message: "attendence not get successfully", status: 200 }
        }
    })
    res.json(result)
}




module.exports = {
    attandenceApi,
    getAttandenceApi,
    getstudentAttandenceUpdateApi,
    getAttandenceBranchbyApi,
    AddAttandenceApi,
    getstudentAttandenceApi
}