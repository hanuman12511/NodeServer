
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
            /* let resp = await addBranch.find({}).then((user) => user)

            console.log(user);
            console.log(resp);
            let dataprofile = resp.filter(data => {
                if (user.groupId === data.groupId && data.groupStatus !== "") {
                    let name1 = data.groupName
                    return name1
                }
            }) */
            /* console.log("user filena=>>", dataprofile[0].groupName);
            user["groupName"] = dataprofile[0].groupName
            console.log("userdata=>>", user); */

            if (user) {
                resultdata.push({ success: true, message: "login data get successfully", data: user, "length": 1 })
            }
            else {
                resultdata.push({ success: false, message: "user not login  successfully", data: user, "length": 1 })
            }
       
    }
    else {
        resultdata = { success: false, message: "login data not get", data: logdata, "length": 0 }
    }
    //res.send(resultdata)
    res.json(resultdata)
}


module.exports = {
    userLogin,
    userRegister,
    Test,
    loginAppApi,
    getloginAppApi
}