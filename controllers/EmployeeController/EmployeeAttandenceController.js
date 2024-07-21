const Departments = require("../../models/Departments")
const AddEmployee = require("../../models/Employee/AddEmployee")
const EmployeeAttandence = require("../../models/employee/EmployeeAttandence")

const attandenceApi = async (req, res, next) => {


    let result = ""
    let status = false
    if (req.body.date !== "") {
        await EmployeeAttandence.find({ date: req.body.date, branchId: req.body.branchid }).then(async (res) => {
            if (res.length > 0) {
                result = { success: false, message: "date exites", status: 200 }
            }
            else {
                const res = new EmployeeAttandence({
                    AttendenceType:req.body.AttendenceType,
                    sessionId:req.body.sessionId,
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
    await EmployeeAttandence.find({ branchId: req.body.branchid }).then((res) => res)
    await EmployeeAttandence.find({ branchId: req.body.branchid, date: req.body.date }).then((res) => {
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
    await EmployeeAttandence.insertMany(req.body).then((res) => {
        console.log("multy", res);
    })
    res.json("result")
}

const getAttandenceBranchbyApi = async (req, res, next) => {
    let datar = []

    let resp = await EmployeeAttandence.find({ branchId: req.body.branchid, date: req.body.date }).then((res) => res)
    let res1 = await AddEmployee.find({ branchId: req.body.branchid }).then((res) => res)
    if (resp.length > 0) {

        let datar1 = resp.map(d => {
            let data1 = []
            if (req.body.date == d.date) {
                return d.data.map(dd => {
                    return { ...dd,...d._doc }
                })


            }

        })


        datar = datar1[0]

    }
    else {

        let dept = await Departments.find().then((res) => res)



        datar = res1.map(d => {
            let deptname = ""
            dept.map(dd => {
                if (dd.Departmentid == d.departmentName) {
                    deptname = dd.Department
                }
            })
            return { department: deptname, employeeId: d.employeeId, firstName: d.firstName, lastName: d.lastName, fatherName: d.fatherName, periods: d.periods, selectperiods: 0, isChecked: false, intime: "--:--", outtime: "--:--", isInTime: false, isOutTime: false, ontime: "08:00", offtime: "02:00", isperiods: false ,AttendenceType:"Manual"}
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


const getAttandenceUpdateApi = async (req, res, next) => {
   let result = ""
   console.log(req.body);
   await EmployeeAttandence.updateOne({ branchId: req.body.branchid,date:req.body.date,"data.employeeId":req.body.employeeId},
     {
            '$set': {
            'data.$.isChecked': req.body.isChecked,
            'data.$.selectperiods': req.body.selectperiods,
    }
    },
    { upsert: true }
    ).then((res) => res).then((data) => {
        console.log("data return",data);
      
        if (data.modifiedCount > 0) {
            result = { success: true, message: " update successfully", status: 200 }
        }
        else {
            result = { success: false, message: " update not ", status: 200 }
        }
    }) 
    res.json(result)
}



module.exports = {
    attandenceApi,
    getAttandenceApi,
    getAttandenceUpdateApi,
    getAttandenceBranchbyApi,
    AddAttandenceApi
}