
const AddEmployee = require("../../models/Employee/AddEmployee");
const LoginApp = require("../../models/LoginApp");
const userData = require("../../models/User");
const addBranch = require("../../models/addBranch");


const Test = (req, res, next) => {

    res.json("data show get")

}
const loginAppApi = async (req, res, next) => {
    let result = ""
    let status = false
    if (req.body.mobile !== "") {
        await LoginApp.find({ mobile: req.body.mobile }).then(async (res) => {
            if (res.length == 0) {
                let resp = await LoginApp.find({}).then((res) => res)
                if (resp.length > 0) {
                    let id = 0
                    resp.map(d => {
                        id = d.loginId
                    })
                    id++
                    const res = new LoginApp({

                        loginId: id,
                        employeeId: req.body.employeeid,
                        groupId: req.body.groupId,
                        branchId: req.body.branchId,
                        mobile: req.body.mobile,
                        email: req.body.email,
                        password: req.body.passord,
                        otp: 1111,
                        status: req.body.status

                    });
                    res.save();

                    if (Object.keys(res).length > 0) {
                        result = { success: true, message: "  create  successfully", status: 200 }
                    }
                    else {
                        result = { success: false, message: "not create", status: 200 }
                    }
                }
                else {
                    const res = new LoginApp({

                        loginId: 1,
                        employeeId: req.body.employeeid,
                        groupId: req.body.groupId,
                        branchId: req.body.branchId,
                        mobile: req.body.mobile,
                        email: req.body.email,
                        password: req.body.passord,
                        otp: 1111,
                        status: req.body.status

                    });
                    res.save();

                    if (Object.keys(res).length > 0) {
                        result = { success: true, message: "  create  successfully", status: 200 }
                    }
                    else {
                        result = { success: false, message: "not create", status: 200 }
                    }
                }
            }
            else {
                result = { success: false, message: "loginid already exits", status: 200 }
            }
        })

    }
    else {
        result = { success: false, message: " pls insert Data", status: 200 }
    }

    res.json(result)
}


const getloginAppApi = async (req, res, next) => {
    let result = ""
    let status = false
    if (req.body.mobile !== "") {
        await LoginApp.find({ mobile: req.body.mobile }).then(async (res) => {
            if (res.length == 0) {


                result = { success: false, message: " user Not Register", status: 200 }
            }
            else {
                result = { success: true, message: "user login successfully", status: 200 }
            }
        })

    }
    else {
        result = { success: false, message: " pls insert Data", status: 200 }
    }

    res.json(result)
}


const userRegister = async (req, res, next) => {
    let resultdata = []
    let len = Object.keys(req.body).length
    if (len) {
        if (req.body.email != '') {
            const user = new userData({
                adminemail: req.body.adminemail,
                password: req.body.password,
                name: req.body.name,
                institutename: req.body.institutename,
                affiliation: req.body.affiliation,
                affiliated: req.body.affiliated,
                medium: req.body.medium,
                phone: req.body.phone,
                branchemail: req.body.branchemail,
                mobile: req.body.mobile,
                contactperson: req.body.contactperson,
                address: req.body.address,
                registerno: req.body.registerno,
                established: req.body.established,
                website: req.body.website,
                status: req.body.status,
                otp: req.body.otp
            });
            user.save();
            try {
                BranchRegister(req.body.email)

            } catch (error) {
                console.log("erro=>>", error);
            } resultdata = { success: true, message: " user register  successfully", "length": 1, "data": req.body }
        }
    }
    else {
        resultdata = { success: false, message: "pls enter email and password", "length": 1 }
    }


    // res.send(resultdata)
    res.json(resultdata)
}




const userLogin = async (req, res, next) => {

    let resultdata = []
    let len = Object.keys(req.body).length
    if (len) {
         let user = await addBranch.findOne({ $or: [{ email: req.body.mobile }, { mobile: req.body.mobile }] }).then((user) => user)
         let user1 = await AddEmployee.findOne({ mobile: req.body.mobile }).then((user) => user)
        
let data1= user==null?user1:user1==null?user:null
console.log("data get=>>",data1);

            if (data1) {
                resultdata.push({ success: true, message: "login data get successfully", data: data1, "length": 1 })
            }
            else {
                resultdata.push({ success: false, message: "user not login  successfully", data: [], "length": 1 })
            } 
       
    }
    else {
        resultdata = { success: false, message: "login data not get", "length": 0 }
    }
    
    res.json(resultdata)
}


module.exports = {
    userLogin,
    userRegister,
    Test,
    loginAppApi,
    getloginAppApi
}