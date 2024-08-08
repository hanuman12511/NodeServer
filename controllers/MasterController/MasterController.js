const FeeHeads = require("../../models/FeeHeads")
const SessionHeads = require("../../models/addSession")
const addSection = require("../../models/addSections")
const ClassDetails = require("../../models/ClassDetails")
const addBranch = require("../../models/addBranch")
const Subjects = require("../../models/Subjects")
const SubjectHead = require("../../models/SubjectHead")
const SubjectToHead = require("../../models/SubjectToHead")
const Class = require("../../models/Class")
const FeeFrequency = require("../../models/FeeFrequency")
const AddEmployee = require("../../models/Employee/AddEmployee")
const addSections = require("../../models/addSections")
const multer = require('multer')
const addTimeSchedule = require("../../models/addTimeSchedule")
const TimeTable = require("../../models/TimeTable")

const storage = multer.memoryStorage();
const upload = multer({ storage });


const addBranchApi = async (req, res) => {
    let result = ""

    if (true) {


        if (req.body.groupStatus !== undefined) {
            let resp1 = await addBranch.find({ mobile: req.body.mobile }).then((res) => res)
            if (resp1.length == 0) {
                const res = new addBranch({
                    groupName: req.body.groupName ? req.body.groupName : "",
                    groupStatus: req.body.groupStatus ? req.body.groupStatus : "",
                    branchId: 0,
                    adminemail: req.body.adminemail,
                    groupId: req.body.groupId,
                    branchname: req.body.name,
                    institutename: req.body.institutename,
                    affiliation: req.body.affiliation,
                    affiliated: req.body.affiliated,
                    medium: req.body.medium,
                    phone: req.body.phone,
                    branchemail: req.body.email,
                    password: req.body.password,
                    username: req.body.username,
                    mobile: req.body.mobile,
                    contactperson: req.body.contactperson,
                    Address: req.body.Address,
                    registerno: req.body.registerno,
                    established: req.body.established,
                    website: req.body.website,
                    logo: req.body.logo,
                    branchControl: req.body.branchControl,
                    status: "mainadmin",
                    otp: "0000"
                });
                res.save();
                result = { success: true, message: " Group create  successfully", status: 200 }
            }
            else {
                result = { success: true, message: "pls enter another number", status: 200 }
            }
        }
        else {

            let resp = await addBranch.find({}).then((res) => res)

            if (resp.length > 0) {
                let resp1 = await addBranch.find({ mobile: req.body.mobile }).then((res) => res)

                if (resp1.length == 0) {

                    let id = 0
                    resp.map(d => {
                        id = d.branchId
                    })
                    id++
                    const res = new addBranch({
                        groupName: req.body.groupName ? req.body.groupName : "",
                        groupStatus: req.body.groupStatus ? req.body.groupStatus : "",
                        branchId: id,
                        adminemail: req.body.adminemail,
                        groupId: req.body.groupId,
                        branchname: req.body.name,
                        institutename: req.body.institutename,
                        affiliation: req.body.affiliation,
                        affiliated: req.body.affiliated,
                        medium: req.body.medium,
                        phone: req.body.phone,
                        branchemail: req.body.email,
                        password: req.body.password,
                        username: req.body.username,
                        mobile: req.body.mobile,
                        contactperson: req.body.contactperson,
                        Address: req.body.Address,
                        registerno: req.body.registerno,
                        established: req.body.established,
                        website: req.body.website,
                        logo: req.body.logo,
                        branchControl: req.body.branchControl,
                        status: "admin",
                        otp: "0000"
                    });
                    res.save();
                    result = { success: true, message: " branch create  successfully", status: 200 }
                }
                else {
                    result = { success: false, message: " pls change mobile number", status: 200 }

                }
            }
            else {
                const res = new addBranch({
                    groupName: req.body.groupName,
                    groupStatus: req.body.groupStatus ? req.body.groupStatus : "",
                    branchId: 1,
                    adminemail: req.body.adminemail,
                    groupId: req.body.groupId,
                    branchname: req.body.name,
                    institutename: req.body.institutename,
                    affiliation: req.body.affiliation,
                    affiliated: req.body.affiliated,
                    medium: req.body.medium,
                    phone: req.body.phone,
                    branchemail: req.body.email,
                    password: req.body.password,
                    username: req.body.username,
                    mobile: req.body.mobile,
                    contactperson: req.body.contactperson,
                    Address: req.body.Address,
                    registerno: req.body.registerno,
                    established: req.body.established,
                    website: req.body.website,
                    logo: req.body.logo,
                    branchControl: req.body.branchControl,
                    status: "admin",
                    otp: "0000"


                });
                res.save();
                result = { success: true, message: " branch create  successfully", status: 200 }
            }

        }
    }
    else {
        result = { success: false, message: " pls insert Data", status: 200 }
    }



    res.json(result)
}

const addBranchUpdateApi = async (req, res) => {
    let result = ""
    try {


        let status = false
       
        if (true) {
            // let resp = await addBranch.find({}).then((res)=>res)
            let resp = await addBranch.updateOne(
                { $or: [{ branchId: req.body.branchId }, { groupId: req.body.groupId }] },
                {
                    $set:
                    {

                        groupName: req.body.groupName,
                        name: req.body.name,
                        institutename: req.body.institutename,
                        affiliation: req.body.affiliation,
                        affiliated: req.body.affiliated,
                        medium: req.body.medium,
                        phone: req.body.phone,
                        branchemail: req.body.email,
                        password: req.body.password,
                        username: req.body.username,
                        mobile: req.body.mobile,
                        contactperson: req.body.contactperson,
                        Address: req.body.Address,
                        registerno: req.body.registerno,
                        established: req.body.established,
                        website: req.body.website,
                        logo: req.body.logo,

                    }
                },
                { upsert: true }
            ).then((res1) => res1)

            status = true
            result = { success: true, message: " branch create  successfully", status: 200 }
            res.json(result)
        }
        else {
            result = { success: false, message: " pls insert Data", status: 200 }
        }
        if (status) {
            result = { success: true, message: " branch create  successfully", status: 200 }
        }
        else {
            result = { success: false, message: " branch head not create", status: 200 }
        }


    } catch (error) {
        next(error)
    }

    res.json(result)
}


const getBranchApi = async (req, res, next) => {
    let resp = await addBranch.find({}).then((res) => res)
    if (resp.length > 0) {
        result = { success: true, message: " get successfully", status: 200, data: resp }
    }
    else {
        result = { success: false, message: "  not  get", status: 200, data: resp }
    }
    res.json(result)
}


const getBranchOneApi = async (req, res, next) => {

    if(req.body.branchId !=undefined  && req.body.groupId!==""){
    await addBranch.find({ branchId: req.body.branchId , groupId: req.body.groupId  }).then(async(res) => 
    {
        
        let gpid=res[0].groupId
        let gres = await addBranch.find({groupId: gpid }).then((res) => res)
       let groupName1=""
        gres.map(d=>{
            if(d.groupName!==""){
                groupName1=d.groupName
            }
        })
     let data1 = {groupname:groupName1,...res[0]._doc}
     
        if (res.length > 0) {
            result = { success: true, message: " get successfully", status: 200, data: data1 }
        }
        else {
            result = { success: false, message: "  not  get", status: 200, data: res }
        }
    }
    
    )}
    
    else if(req.body.groupId!="" && req.body.groupStatus!=""){
       await addBranch.find({ groupId: req.body.groupId,groupStatus:req.body.groupStatus }).then((res) =>{

        if (res.length > 0) {
            result = { success: true, message: " get successfully", status: 200, data: res[0] }
        }
        else {
            result = { success: false, message: "  not  get", status: 200, data: res }
        }

       })
    }
   
    res.json(result)
}
const getBranchControlApi = async (req, res, next) => {

    let result = ""
    let status = false
  
    if (true) {

        let resp = await addBranch.updateOne(
            { branchId: req.body.branchId },
            {
                $set:
                {

                    branchControl: req.body.branchControl,

                }
            },
            { upsert: true }
        ).then((res) => res)
      
        status = true


    }
    else {
        result = { success: false, message: " pls insert Data", status: 200 }
    }
    if (status) {
        result = { success: true, message: " branch   control update successfully", status: 200 }
    }
    else {
        result = { success: false, message: " branch control update not ", status: 200 }
    }

    res.json(result)
}


const getBranchGroupIdApi = async (req, res, next) => {
    let resp = await addBranch.find({ groupId: req.body.id, groupStatus: "" }).then((res) => res)

    if (resp.length > 0) {
        result = { success: true, message: " get successfully", status: 200, data: resp }
    }
    else {
        result = { success: false, message: "  not  get", status: 200, data: resp }
    }
    res.json(result)
}



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

const getfeeHeadsApi = async (req, res, next) => {
    let resdata=[]
    let resp1 = await FeeFrequency.find({branchid: req.body.branchid  }).then((res) => res)
   await FeeHeads.find({ branchid: req.body.branchid }).then((res) =>{
        
     
        res.length>0?res.map(ss=>{
            let feefrename=""
                resp1.map(ff=>{
                    if(ff.feefrequencyId==ss. FeeFrequencyId){
                        feefrename=ff.FeeFrequency
                    }
                })
                
        resdata.push({feefrename:feefrename,...ss._doc})
        })
    :null

    })
 let resp = resdata

    if (resp.length > 0) {
        result = { success: true, message: " feeheads get successfully", status: 200, data: resp }
    }
    else {
        result = { success: false, message: " feeheads  not  get", status: 200, data: resp }
    }
 
    res.json(result)
}



const feeheadUpdateApi = async (req, res, next) => {

    let result = ""
    let status = false
   
    

    if (true) {

        let resp = await FeeHeads.updateOne(
            { branchid: req.body.branchid,feeHeadId:req.body.feeHeadId},
            {
                $set:
                {

                    FeeHead: req.body.feehead,
                    FeeFrequencyId: req.body.feefrequency,

                }
            },
            { upsert: true }
        ).then((res) => res)
      
        status = true


    }
    else {
        result = { success: false, message: " pls insert Data", status: 200 }
    }
    if (status) {
        result = { success: true, message: " branch   control update successfully", status: 200 }
    }
    else {
        result = { success: false, message: " branch control update not ", status: 200 }
    }

    res.json(result)
}







const getAllfeeHeadsApi = async (req, res, next) => {

    let resp = await FeeHeads.find({ branchid: req.body.branchid }).then((res) => res)

    if (resp.length > 0) {
        result = { success: true, message: " feeheads get successfully", status: 200, data: resp }
    }
    else {
        result = { success: false, message: " feeheads  not  get", status: 200, data: resp }
    }

    res.json(result)
}


const sessionApi = async (req, res, next) => {
    let result = ""
    let status = false
   
    if (req.body.session !== "" && req.body.month !== "") {

        let resp1 = await SessionHeads.find({ branchid:req.body.branchid,SessionName: req.body.session }).then((res) => res)

        if (Object.keys(resp1).length == 0) {
            let resp = await SessionHeads.find({ branchid:req.body.branchid}).then((res) => res)

            if (resp.length > 0) {
                let id = 0
                resp.map(d => {
                    id = d.sessionId
                })
                id++
                const res = new SessionHeads({

                    sessionId: id,
                    SessionName: req.body.session,
                    StartMonth: req.body.month,
                    branchid: req.body.branchid,
                    groupid: req.body.groupid,
                    branchControl: true,

                });
                res.save();
                status = true
            }
            else {
                const res = new SessionHeads({
                    sessionId: 1,
                    SessionName: req.body.session,
                    StartMonth: req.body.month,
                    branchid: req.body.branchid,
                    groupid: req.body.groupid,
                    branchControl: true,
                });
                res.save();

                status = true
            }
        }
        else {
            result = { success: false, message: " pls insert Data", status: 200 }
        }
        if (status) {
            result = { success: true, message: "  session head create  successfully", status: 200 }
        }
        else {
            result = { success: false, message: "  session head already exists ", status: 200 }
        }
    } else {
        result = { success: false, message: "pls change session name", status: 200 }
    }

    res.json(result)
}


const getSessionApi = async (req, res, next) => {
   
    let resp = await SessionHeads.find({}).then((res) => res)

    if (resp.length > 0) {
        result = { success: true, message: " session  get successfully", status: 200, data: resp }
    }
    else {
        result = { success: false, message: "  session  not  get", status: 200, data: resp }
    }

    res.json(result)
}

const sessionUpdateApi = async (req, res, next) => {
    let result = ""
    let status = false

  
    let resp1 = await SessionHeads.find({branchid:req.body.branchid}).then((res) => res)
   
    if (Object.keys(resp1).length == 0) {


        await SessionHeads.updateOne(
            { branchid: req.body.branchId, sessionId: req.body.sessionId, groupid: req.body.groupid },
            {
                $set:
                {

                    SessionName: req.body.session,
                    StartMonth: req.body.month
                }
            },
            { upsert: true }
        ).then((res) => res).then((data) => {
           
            status = true
            if (status) {
                result = { success: true, message: " session update successfully", status: 200 }
            }
            else {
                result = { success: false, message: " session update not ", status: 200 }
            }
        })

    }
    else {
        result = { success: false, message: " pls change Data", status: 200 }
    }


    res.json(result)
}







const sessionControlApi = async (req, res, next) => {

    let result = ""
    let status = false
    if (true) {

        await SessionHeads.updateOne(
            { sessionId: req.body.sessionId },
            {
                $set:
                {

                    branchControl: req.body.branchControl,

                }
            },
            { upsert: true }
        ).then((res) => res)
       
        status = true


    }
    else {
        result = { success: false, message: " pls insert Data", status: 200 }
    }
    if (status) {
        result = { success: true, message: " session  control update successfully", status: 200 }
    }
    else {
        result = { success: false, message: " session control update not ", status: 200 }
    }

    res.json(result)
}


const months = [
    { label: "January", value:"1"},
    { label: "February", value:"2"},
    { label: "March", value:"3"},
    { label: "April", value:"4"},
    { label: "May", value:"5"},
    { label: "June", value:"6"},
    { label: "July", value:"7"},
    { label: "August", value:"8"},
    { label:"September", value:"9"},
    { label: "October", value:"10"},
    { label:"November", value:"11"},
    { label: "December", value:"12"}]



const getSessionByBranchIdApi = async (req, res, next) => {

    let data=[]
    await SessionHeads.find({ branchid: req.body.id }).then((res) =>{ 
        let mdata=[];
    res.length>0?res.map(d=>{
        let monthsname=""
        months.map(m=>{
            if(d.StartMonth==m.value){
                monthsname=m.label
            }
          
        })
        mdata.push({monthname:monthsname,...d._doc})
        
    }):
    null;
    data=mdata
    
    })


    if (data.length > 0) {
        result = { success: true, message: " session data get successfully", status: 200, data: data }
    }
    else {
        result = { success: false, message: "  session  data not  get", status: 200, data: data }
    }

    res.json(result)
}

const classApi = async (req, res, next) => {
    let result = ""
    let status = false
  
    let resp1 = await Class.find({ Class: req.body.ClassName, branchid: req.body.branchid }).then((res) => res)
   
    if (Object.keys(resp1).length == 0) {

        if (req.body.ClassName !== "") {
            let resp = await Class.find({}).then((res) => res)
            if (resp.length > 0) {
                let id = 0
                resp.map(d => {
                    id = d.classId
                })
                id++
                const res = new Class({

                    classId: id,
                    branchid: req.body.branchid,
                    groupid: req.body.branchid,
                    Class: req.body.ClassName,
                    branchControl: true
                });
                res.save();
                status = true
            }
            else {
                const res = new Class({

                    classId: 1,
                    branchid: req.body.branchId,
                    groupid: req.body.branchId,
                    Class: req.body.ClassName,
                    branchControl: true

                });
                res.save();

                status = true
            }
        }
        else {
            result = { success: false, message: " pls insert Data", status: 200 }
        }

   
    if (status) {
        result = { success: true, message: "  class create  successfully", status: 200 }
    }
    else {
        result = { success: false, message: "  class not create successfull", status: 200 }
    }
} else {
    result = { success: false, message: " pls class already exists ", status: 200 }
}
    res.json(result)
}



const classUpdateApi = async (req, res, next) => {
    let result = ""
    let status = false

   
    let resp1 = await Class.find({ Class: req.body.Class }).then((res) => res)
   
    if (Object.keys(resp1).length == 0) {


        await Class.updateOne(
            { branchid: req.body.branchId, groupid: req.body.groupid, classId: req.body.classId },
            {
                $set:
                {

                    Class: req.body.Class,

                }
            },
            { upsert: true }
        ).then((res) => res).then((data) => {
         
            status = true
            if (status) {
                result = { success: true, message: " class update successfully", status: 200 }
            }
            else {
                result = { success: false, message: " class update not ", status: 200 }
            }
        })

    }
    else {
        result = { success: false, message: " pls change Data", status: 200 }
    }


    res.json(result)
}




const classControlApi = async (req, res, next) => {

    let result = ""
    let status = false
    if (true) {

        await Class.updateOne(
            { classId: req.body.classId },
            {
                $set:
                {

                    branchControl: req.body.branchControl,

                }
            },
            { upsert: true }
        ).then((res) => res)
    
        status = true


    }
    else {
        result = { success: false, message: " pls insert Data", status: 200 }
    }
    if (status) {
        result = { success: true, message: " class  control update successfully", status: 200 }
    }
    else {
        result = { success: false, message: " class control update not ", status: 200 }
    }

    res.json(result)
}







const getClassApi = async (req, res, next) => {

    console.log(req.body);
   
    let resp = await Class.find({  branchid: req.body.branchId }).then((res) => res)

    if (resp.length > 0) {
        result = { success: true, message: " addClass  get successfully", status: 200, data: resp }
    }
    else {
        result = { success: false, message: "  addClass  not  get", status: 200, data: resp }
    }

    res.json(result)
}


const getOneClassApi = async (req, res, next) => {
    let classid = req.body.classid
    let resp = await Class.find({ classId: classid }).then((res) => res)

    if (resp.length > 0) {
        result = { success: true, message: "   get class successfully", status: 200, data: resp }
    }
    else {
        result = { success: false, message: "    not  get classs", status: 200, data: resp }
    }

    res.json(result)
}





const getSectionApi = async (req, res, next) => {

    let resp = await addSection.find({ branchid: req.body.branchid }).then((res) => res)

    if (resp.length > 0) {
        result = { success: true, message: " addSection get successfully", status: 200, data: resp }
    }
    else {
        result = { success: false, message: "  addSection not  get", status: 200, data: resp }
    }

    res.json(result)
}

const SectionApi = async (req, res, next) => {
    let result = ""
    let status = false
    if (req.body.Sectionname !== "") {
      
        let resp1 = await addSection.find({ branchid:req.body.branchid,SectionName: req.body.SectionName }).then((res) => res)
    
        if (Object.keys(resp1).length == 0) {
            let resp = await addSection.find({}).then((res) => res)
            if (resp.length > 0) {
                let id = 0
                resp.map(d => {
                    id = d.sectionId
                })
                id++
                const res = new addSection({
                    branchid: req.body.branchid,
                    groupid: req.body.branchid,
                    sectionId: id,
                    SectionName: req.body.SectionName,
                    branchControl: true
                });
                res.save();
                status = true
            }
            else {
                const res = new addSection({
                    branchid: req.body.branchid,
                    groupid: req.body.branchid,
                    sectionId: 1,
                    SectionName: req.body.SectionName,
                    branchControl: true
                });
                res.save();

                status = true
            }
        }
        else {
            result = { success: false, message: " pls insert Data", status: 200 }
        }
        if (status) {
            result = { success: true, message: "  create  successfully", status: 200 }
        }
        else {
            result = { success: false, message: "  section already exists", status: 200 }
        }
    } else {
        result = { success: false, message: " pls fill data", status: 200 }
    }

    res.json(result)
}


const TimeSchedule = async (req, res, next) => {
    let result = ""
    let status = false
    console.log(req.body);
    const {
        branchid,
        groupid,
        timeschedulename,
        intime,
        outtime,
        display,
        } =req?.body
    if (req.body !== "") {
      
        let resp1 = await addTimeSchedule.find({ branchid:branchid,timeschedulename:timeschedulename }).then((res) => res)
    
        if (Object.keys(resp1).length == 0) {
            let resp = await addTimeSchedule.find({ branchid:branchid }).then((res) => res)
            if (resp.length > 0) {
                let id = 0
                resp.map(d => {
                    id = d.timescheduleid
                })
                id++
                const res = new addTimeSchedule({
                    branchid,
                    groupid,
                    timeschedulename,
                    intime,
                    outtime,
                    display,
                    timescheduleid:id,
                    branchControl:true ,
                });
                res.save();
                status = true
            }
            else {
                 const res = new addTimeSchedule({
                    branchid,
                    groupid,
                    timeschedulename,
                    intime,
                    outtime,
                    display,
                    timescheduleid:1,
                    branchControl:true ,
                });
                res.save();

                status = true
            }
        }
        else {
            result = { success: false, message: " pls insert Data", status: 200 }
        }
        if (status) {
            result = { success: true, message: "  create  successfully", status: 200 }
        }
        else {
            result = { success: false, message: "  already exists", status: 200 }
        }
    } else {
        result = { success: false, message: " pls fill data", status: 200 }
    }

    res.json(result)
}

const TimeTableApi = async (req, res, next) => {
    let result = ""
    let status = false
    console.log(req.body);
    const {
        groupid,
        branchid,
        classsection,
        subject,
        timeschedule,
        employee,
        sessionId,
       selectday
        } =req?.body
    if (req.body !== "") {
      
      
    
       
            let resp = await TimeTable.find({ branchid:branchid ,timeschedule:timeschedule,classsection:classsection}).then((res) => res)
            if(resp.length==0){
            let resp = await TimeTable.find({ branchid:branchid }).then((res) => res)
            if (resp.length > 0) {
                let id = 0
                resp.map(d => {
                    id = d.timetableid
                })
                id++
                const res = new TimeTable({
                    groupid,
                    branchid,
                    classsection,
                    subject,
                    timeschedule,
                    employee,
                    sessionId,
                     selectday,
                     timetableid:id,
                    branchControl:true ,
                });
                res.save();
                status = true
            }
            else {
                const res = new TimeTable({
                    groupid,
                    branchid,
                    classsection,
                    subject,
                    timeschedule,
                    employee,
                    sessionId,
                     selectday,
                     timetableid:1,
                    branchControl:true ,
                });
                res.save();

                status = true
            }
        
       
        if (status) {
            result = { success: true, message: "  create  successfully", status: 200 }
        }
        else {
            result = { success: false, message: "  already exists", status: 200 }
        }
   
}else{
    result = { success: false, message: "  already exists", status: 200 } 
}
} else {
    result = { success: false, message: " pls fill data", status: 200 }
}
    res.json(result)
}

const TimeTableUpdateApi = async (req, res, next) => {
    let result = ""
    let status = false
    const {
        timetableid,
        groupid,
        branchid,
        classsection,
        subject,
        timeschedule,
        employee,
        sessionId,
       selectday
        } =req?.body
  
    let resp1 = await TimeTable.find({branchid:branchid, sessionId:sessionId,timetableid:timetableid}).then((res) => res)
  
    if (Object.keys(resp1).length > 0) {


        await TimeTable.updateOne(
            {branchid:branchid, sessionId:sessionId,timetableid:timetableid },
            {
                $set:
                {

                    classsection,
                    subject,
                    timeschedule,
                    employee,
                  
                selectday

                }
            },
            { upsert: true }
        ).then((res) => res).then((data) => {
         
            status = true
            if (status) {
                result = { success: true, message: " TimeTable update successfully", status: 200 }
            }
            else {
                result = { success: false, message: " TimeTable update not ", status: 200 }
            }
        })

    }
    else {
        result = { success: false, message: " pls change Data", status: 200 }
    }


    res.json(result)
}


const getTimeTableApi = async (req, res, next) => {
console.log("get table req",req.body);
    let resp = await TimeTable.find({ branchid: req.body.branchid }).then((res) => res)

    if (resp.length > 0) {
        result = { success: true, message: " time schedule get successfully", status: 200, data: resp }
    }
    else {
        result = { success: false, message: "  addSection not  get", status: 200, data: resp }
    }

    res.json(result)
}




const gettimetableperiodApi = async (req, res, next) => {

    let resp = await addTimeSchedule.find({ branchid: req.body.branchid }).then((res) => res)
    let timetable = await TimeTable.find({ branchid: req.body.branchid }).then((res) => res)
    let res1 = await ClassDetails.find({ branchid: req.body.branchid }).then((res) => res)
let dataapi=[]
    let pdata=[]

    resp&&resp.map(d=>{
        pdata.push({"name":d.timeschedulename,"time":d.intime+"-"+d.outtime})
    })
dataapi.push({"class":"class","schedule":pdata})
console.log("get api",dataapi);
res1&&res1.map(cl=>{
    let subsir=[]
    timetable&&timetable.map(tt=>{
        if(tt.classsection==cl.classsection){
            subsir.push({"name":tt.employee,"time":tt.subject})
        }
    }) 
    console.log("subject sir",subsir);
    dataapi.push({"class":cl.classsection,"schedule":subsir})
})
console.log("get api",dataapi);

    if (dataapi.length > 0) {
        result = { success: true, message: " time schedule get successfully", status: 200, data: dataapi }
    }
    else {
        result = { success: false, message: "  addSection not  get", status: 200, data: resp }
    }

    res.json(result)
}
const  gettimescheduleApi = async (req, res, next) => {

    let resp = await addTimeSchedule.find({ branchid: req.body.branchid }).then((res) => res)

    if (resp.length > 0) {
        result = { success: true, message: " time schedule get successfully", status: 200, data: resp }
    }
    else {
        result = { success: false, message: "  addSection not  get", status: 200, data: resp }
    }

    res.json(result)
}




const sectionUpdateApi = async (req, res, next) => {
    let result = ""
    let status = false

  
    let resp1 = await addSection.find({branchid:req.body.branchId, SectionName: req.body.Sectionname }).then((res) => res)
  
    if (Object.keys(resp1).length == 0) {


        await addSection.updateOne(
            { branchid: req.body.branchId, groupid: req.body.groupid, sectionId: req.body.sectionId },
            {
                $set:
                {

                    SectionName: req.body.Sectionname,

                }
            },
            { upsert: true }
        ).then((res) => res).then((data) => {
         
            status = true
            if (status) {
                result = { success: true, message: " section update successfully", status: 200 }
            }
            else {
                result = { success: false, message: " section update not ", status: 200 }
            }
        })

    }
    else {
        result = { success: false, message: " pls change Data", status: 200 }
    }


    res.json(result)
}

const TimeScheduleUpdate = async (req, res, next) => {
    let result = ""
    let status = false
const { branchid,
    groupid,
    timeschedulename,
    intime,
    outtime,
    display,
    timescheduleid}=req?.body
  
    let resp1 = await addTimeSchedule.find({branchid:branchid, timescheduleid:timescheduleid }).then((res) => res)
  
    if (Object.keys(resp1).length > 0) {


        await addTimeSchedule.updateOne(
            { branchid: branchid, groupid: groupid, timescheduleid:timescheduleid},
            {
                $set:
                {

                   
                    timeschedulename,
                    intime,
                    outtime,
                    display,
                   
                }
            },
            { upsert: true }
        ).then((res) => res).then((data) => {
         
            status = true
            if (status) {
                result = { success: true, message: " timeschedule update successfully", status: 200 }
            }
            else {
                result = { success: false, message: "timeschedule  update not ", status: 200 }
            }
        })

    }
    else {
        result = { success: false, message: " pls change Data", status: 200 }
    }
 res.json(result)
}




const sectionControlApi = async (req, res, next) => {

    let result = ""
    let status = false
    if (true) {

        await addSection.updateOne(
            { sectionId: req.body.sectionId },
            {
                $set:
                {

                    branchControl: req.body.branchControl,

                }
            },
            { upsert: true }
        ).then((res) => res)
       
        status = true


    }
    else {
        result = { success: false, message: " pls insert Data", status: 200 }
    }
    if (status) {
        result = { success: true, message: " class  control update successfully", status: 200 }
    }
    else {
        result = { success: false, message: " sectioncontrol update not ", status: 200 }
    }

    res.json(result)
}






const FeeFrequencyApi = async (req, res, next) => {
    let result = ""
    let status = false
    if (req.body.feefrequency !== "") {
      
        let resp1 = await FeeFrequency.find({ branchid : req.body.branchid,FeeFrequency: req.body.feefrequency }).then((res) => res)
       
        if (Object.keys(resp1).length == 0) {

            let resp = await FeeFrequency.find({}).then((res) => res)
            if (resp.length > 0) {
                let id = 0
                resp.map(d => {
                    id = d.feefrequencyId
                })
                id++
                const res = new FeeFrequency({
                    branchid: req.body.branchid,
                    groupid: req.body.groupid,
                    feefrequencyId: id,
                    FeeFrequency: req.body.feefrequency,
                    Display: req.body.Display,
                    branchControl: true
                });
                res.save();
                status = true
            }
            else {
                const res = new FeeFrequency({
                    branchid: req.body.branchId,
                    groupid: req.body.groupId,
                    feefrequencyId: 1,
                    FeeFrequency: req.body.FeeFrequency,
                    Display: req.body.Display,
                    branchControl: true
                });
                res.save();

                status = true
            }
        }
        else {
            result = { success: false, message: " pls insert Data", status: 200 }
        }
        if (status) {
            result = { success: true, message: "  create  successfully", status: 200 }
        }
        else {
            result = { success: false, message: "  not create", status: 200 }
        }
    } else {

    }

    res.json(result)
}



const feefrequencyUpdateApi = async (req, res, next) => {
    let result = ""
    let status = false
  /*   branchId:branchid,
    groupid:groupid,
    FeeFrequency:feefrequency,
    feefrequencyId */
    
    let resp1 = await FeeFrequency.find({ branchid:req.body.branchId, FeeFrequency: req.body.FeeFrequency }).then((res) => res)
    
    if (Object.keys(resp1).length == 0) {
        await FeeFrequency.updateOne(
            { branchid: req.body.branchId, groupid: req.body.groupid, feefrequencyId: req.body.feefrequencyId },
            {
                $set:
                {

                    FeeFrequency: req.body.FeeFrequency,

                }
            },
            { upsert: true }
        ).then((res) => res).then((data) => {
           
            status = true
            if (status) {
                result = { success: true, message: " FeeFrequency update successfully", status: 200 }
            }
            else {
                result = { success: false, message: " FeeFrequency update not successfully", status: 200 }
            }
        })

    }
    else {
        result = { success: false, message: "FeeFrequency Data exists " , status: 200 }
    }


    res.json(result)
}




const feefrequencyControlApi = async (req, res, next) => {

    let result = ""
    let status = false
    if (true) {

        await FeeFrequency.updateOne(
            { feefrequencyId: req.body.feefrequencyId },
            {
                $set:
                {

                    branchControl: req.body.branchControl,

                }
            },
            { upsert: true }
        ).then((res) => res)
       
        status = true


    }
    else {
        result = { success: false, message: " pls insert Data", status: 200 }
    }
    if (status) {
        result = { success: true, message: " class  control update successfully", status: 200 }
    }
    else {
        result = { success: false, message: " sectioncontrol update not ", status: 200 }
    }

    res.json(result)
}




const getFeeFrequencyApi = async (req, res, next) => {

    let resp = await FeeFrequency.find({ branchid: req.body.branchid }).then((res) => res)

    if (resp.length > 0) {
        result = { success: true, message: "  get successfully", status: 200, data: resp }
    }
    else {
        result = { success: false, message: "   not  get", status: 200, data: resp }
    }

    res.json(result)
}


const getAllFeeFrequencyApi = async (req, res, next) => {

    let resp = await FeeFrequency.find({ branchid: req.body.branchid }).then((res) => res)

    if (resp.length > 0) {
        result = { success: true, message: "  fee frequncy data get successfully", status: 200, data: resp }
    }
    else {
        result = { success: false, message: " fee frequncy data  not  get successfully", status: 200, data: resp }
    }

    res.json(result)
}





const ClassDetailApi = async (req, res, next) => {
    let result = ""
    let status = false

    if (req.body.Class !== "") {

        await ClassDetails.find({ classsection: req.body.classsection, branchid: req.body.branchId }).then((res) => res).then(async (data) => {

            if (Object.keys(data).length > 0) {
              
                result = { success: true, message: "class Details exist", status: 200 }
            }
            else {

                let resp = await ClassDetails.find({}).then((res) => res)
                if (resp.length > 0) {
                    let id = 0
                    resp.map(d => {
                        id = d.classDetailId
                    })
                    id++
                    const res = new ClassDetails({
                        sessionId: req.body.sessionId,
                        branchid: req.body.branchId,
                        groupid: req.body.groupId,
                        classDetailId: id,
                        ClassId: req.body.Class,
                        SectionId: req.body.Section,
                        SubjectId: req.body.Subject,
                        TeacherId: req.body.Teacher,
                        RoomNo: req.body.RoomNo,
                        feeDetails: req.body.feeDetails,
                        classsection: req.body.classsection
                    });
                    res.save();

                    status = true
                }
                else {
                    const res = new ClassDetails({
                        sessionId: req.body.sessionId,
                        branchid: req.body.branchId,
                        groupid: req.body.groupId,
                        classDetailId: 1,
                        ClassId: req.body.Class,
                        SectionId: req.body.Section,
                        SubjectId: req.body.Subject,
                        TeacherId: req.body.Teacher,
                        RoomNo: req.body.RoomNo,
                        feeDetails: req.body.feeDetails,
                        classsection: req.body.classsection
                    });


                    res.save();

                    status = true
                }

            }
        })

    }
    else {
        result = { success: false, message: " pls insert Data", status: 200 }
    }
    if (status) {
        result = { success: true, message: " create  successfully", status: 200 }
    }


    res.json(result)
}


const getClassDetailApi = async (req, res, next) => {
    console.log(req.body);
    let result = ""
    let resp = await ClassDetails.find({ branchid: req.body.branchid }).then((res) => res)
    if (resp.length > 0) {
        let class1 = await Class.find().then((res) => res)
        let dataclass = []
        resp.map(d => {
            class1.map(dd => {
                if (d.ClassId == dd.classId) {
                    dataclass.push({ ...d._doc, Class: dd.Class })
                }

            })
        })

        result = { success: true, message: "Class Detail Getsuccessfully", status: 200, data: dataclass }
    }
    else {
        result = { success: false, message: "Class Detail not Get successfully", status: 200, data: resp }
    }

    res.json(result)
}

const getClassDetailSomeApi = async (req, res, next) => {
    console.log(req.body);
    let result = ""
    let resp = await ClassDetails.find({ branchid: req.body.branchid }).then((res) => res)
    if (resp.length > 0) {
        let data = []
        resp.map(d=>{
            data.push({classsection:d.classsection,classDetailId:d.classDetailId,SubjectId:d.SubjectId})
        })

        result = { success: true, message: "Class Detail Getsuccessfully", status: 200, data: data}
    }
    else {
        result = { success: false, message: "Class Detail not Get successfully", status: 200, data: resp }
    }

    res.json(result)
}

const getClassDetailByClassApi = async (req, res, next) => {
    console.log("by class=",req.body);

    const{
        branchid,classsection
    }=req?.body
    let result = ""
    let resp = await ClassDetails.find({ branchid:branchid,classsection:classsection }).then((res) => res)
    console.log("by class",resp);
    if (resp.length > 0) {
        let data = []
        resp.map(d=>{
            data.push({classsection:d.classsection,classDetailId:d.classDetailId,SubjectId:d.SubjectId})
        })

        result = { success: true, message: "Class Detail Get successfully", status: 200, data: data}
    }
    else {
        result = { success: false, message: "Class Detail not Get successfully", status: 200, data: resp }
    }

    res.json(result)
}



const getClassDetailApiByclass = async (req, res, next) => {
    let result = ""

    let resp = await ClassDetails.find({ branchid: req.body.branchid, ClassId: req.body.classid }).then((res) => res)
   
    if (resp.length > 0) {
        result = { success: true, message: "  get successfully", status: 200, data: resp }
    }
    else {
        result = { success: false, message: "   not  get", status: 200, data: resp }
    }
    res.json(result)
}
const ClassDetailUpdateApi = async (req, res, next) => {
    let result = ""
   
    await ClassDetails.updateOne({ branchid: req.body.branchId, classDetailId: req.body.classDetailId },
        {
            '$set': {
                branchid: req.body.branchId,
                ClassId: req.body.Class,
                SectionId: req.body.Section,
                SubjectId: req.body.Subject,
                TeacherId: req.body.Teacher,
                RoomNo: req.body.RoomNo,
                feeDetails: req.body.feeDetails,
                classsection: req.body.classsection

            }
        },
        { upsert: true }
    ).then((res) => res).then((data) => {
       

        if (data.modifiedCount > 0) {
            result = { success: true, message: " update successfully", status: 200 }
        }
        else {
            result = { success: false, message: " update not ", status: 200 }
        }
    })
    res.json(result)
}

const subjectHeadApi = async (req, res) => {
    let result = ""
    let status = false

    if (req.body.Class !== "") {
        let resp = await SubjectHead.find({}).then((res) => res)
        if (resp.length > 0) {
            let id = 0
            resp.map(d => {
                id = d.subjectHeadId
            })
            id++
            const res = new SubjectHead({
                branchId: req.body.branchid,
                groupId: req.body.branchid,
                subjectHeadId: id,
                SubjectHead: req.body.SubjectHead,
                Display: req.body.Display

            });
            res.save();
            status = true
        }
        else {
            const res = new SubjectHead({

                branchId: req.body.branchid,
                groupId: req.body.branchid,
                subjectHeadId: 1,
                SubjectHead: req.body.SubjectHead,
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
        result = { success: true, message: "  create  successfully", status: 200 }
    }
    else {
        result = { success: false, message: "  not create", status: 200 }
    }
    res.json(result)
}
const getAllsubjectHeadApi = async (req, res) => {
    let resp = await SubjectHead.find({}).then((res) => res)
    if (resp.length > 0) {
        result = { success: true, message: "  get successfully", status: 200, data: resp }
    }
    else {
        result = { success: false, message: "   not  get", status: 200, data: resp }
    }
    res.json(result)
}
const getsubjectHeadApi = async (req, res) => {
    let resp = await SubjectHead.find({ branchId: req.body.branchid }).then((res) => res)
    if (resp.length > 0) {
        result = { success: true, message: "  get successfully", status: 200, data: resp }
    }
    else {
        result = { success: false, message: "   not  get", status: 200, data: resp }
    }
    res.json(result)
}



const subjectheadUpdateApi = async (req, res, next) => {

    let result = ""
    let status = false
   
  

    if (true) {

        let resp = await SubjectHead.updateOne(
            {branchId: req.body.branchid, subjectHeadId:req.body. subjectHeadId},
            {
                $set:
                {

                    SubjectHead: req.body.SubjectHead,
                   

                }
            },
            { upsert: true }
        ).then((res) => res)
   
        status = true


    }
    else {
        result = { success: false, message: " pls insert Data", status: 200 }
    }
    if (status) {
        result = { success: true, message: " subject head update successfully", status: 200 }
    }
    else {
        result = { success: false, message: "subject head not update successfully ", status: 200 }
    }

    res.json(result)
}







const subjectApi = async (req, res) => {
    let result = ""
    let status = false

    if (req.body.Class !== "") {
        let resp = await Subjects.find({}).then((res) => res)
        if (resp.length > 0) {
            let id = 0
            resp.map(d => {
                id = d.subjectId
            })
            id++
            const res = new Subjects({

                branchId: req.body.branchid,
                groupId: req.body.groupid,
                subjectId: id,
                Subjects: req.body.Subjects,
                SubjectCode: req.body.SubjectCode,
                Display: req.body.Display
            });
            res.save();
            status = true
        }
        else {
            const res = new Subjects({

                branchId: req.body.branchid,
                groupId: req.body.groupid,
                subjectId: 1,
                Subjects: req.body.Subjects,
                SubjectCode: req.body.SubjectCode,
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
        result = { success: true, message: "  create  successfully", status: 200 }
    }
    else {
        result = { success: false, message: "  not create", status: 200 }
    }
    res.json(result)
}




const subjectUpdateApi = async (req, res, next) => {
     let result = ""
    let status = false
    console.log(req.body);
    if (true) {
        let resp = await Subjects.updateOne(
            {branchId: req.body.branchid, subjectId:req.body.subjectId},
            {
                $set:
                {
                Subjects: req.body.Subjects,
                SubjectCode: req.body.SubjectCode,
                Display: req.body.Display,
                }
            },
            { upsert: true }
        ).then((res) => res)
       
        status = true


    }
    else {
        result = { success: false, message: " pls insert Data", status: 200 }
    }
    if (status) {
        result = { success: true, message: " subject  update successfully", status: 200 }
    }
    else {
        result = { success: false, message: "subject  not update successfully ", status: 200 }
    }

    res.json(result)
}







const getsubjectApi = async (req, res) => {
  
    let resp = await Subjects.find({ branchId: req.body.branchid }).then((res) => res)
    if (resp.length > 0) {
        result = { success: true, message: "  get successfully", status: 200, data: resp }
    }
    else {
        result = { success: false, message: "   not  get", status: 200, data: resp }
    }
   
    res.json(result)
}



const getAllsubjectApi = async (req, res) => {
    let resp = await Subjects.find({}).then((res) => res)
    if (resp.length > 0) {
        result = { success: true, message: "  get successfully", status: 200, data: resp }
    }
    else {
        result = { success: false, message: "   not  get", status: 200, data: resp }
    }
    res.json(result)
}


const subjecttoHeadApi = async (req, res) => {
    let result = ""
    let status = false
   
    if (req.body.Class !== "") {
        let resp = await SubjectToHead.find({}).then((res) => res)
        if (resp.length > 0) {
            let id = 0
            resp.map(d => {
                id = d.subjecttoHeadId
            })
            id++
            const res = new SubjectToHead({

                branchId: req.body.branchid,
                groupId: req.body.groupid,
                subjecttoHeadId: id,
                SubjectHead: req.body.SubjectHead,
                Subjects: req.body.Subjects


            });
            res.save();
            status = true
        }
        else {
            const res = new SubjectToHead({

                branchId: req.body.branchid,
                groupId: req.body.groupid,
                subjecttoHeadId: 1,
                SubjectHead: req.body.SubjectHead,
                Subjects: req.body.Subjects

            });
            res.save();

            status = true
        }
    }
    else {
        result = { success: false, message: " pls insert Data", status: 200 }
    }
    if (status) {
        result = { success: true, message: "  create  successfully", status: 200 }
    }
    else {
        result = { success: false, message: "  not create", status: 200 }
    }

    res.json(result)
}
const getAllsubjecttoHeadApi = async (req, res) => {
    let resp = await SubjectToHead.find({}).then((res) => res)
    if (resp.length > 0) {
        result = { success: true, message: "  get successfully", status: 200, data: resp }
    }
    else {
        result = { success: false, message: "   not  get", status: 200, data: resp }
    }
    res.json(result)
}

const getSubjectWithSubjecttoheadApi= async (req, res) => {
    const{branchId,subjecttoHeadId}=req?.body
    console.log(req.body);
    let resp = await SubjectToHead.find({branchId:branchId,subjecttoHeadId:subjecttoHeadId}).then((res) => res)
    console.log(resp);
    if (resp.length > 0) {
        result = { success: true, message: "  get successfully", status: 200, data: resp }
    }
    else {
        result = { success: false, message: "   not  get", status: 200, data: resp }
    }
    res.json(result)
}

const getsubjectheadtosubjectApi = async (req, res) => {

    let resp = await SubjectToHead.find({ branchId: req.body.branchid, subjecttoHeadId: req.body.subjectheadid }).then((res) => res)
    if (resp.length > 0) {
        result = { success: true, message: "  get successfully", status: 200, data: resp }
    }
    else {
        result = { success: false, message: "   not  get", status: 200, data: resp }
    }
    res.json(result)
}

const getsubjecttoHeadApi = async (req, res) => {
    
    let resp = await SubjectToHead.find({ branchId: req.body.branchid }).then((res) => res)
    let resp1 = await SubjectHead.find({ branchId: req.body.branchid }).then((res) => res)
   
    let data = []
    resp.map(d1 => {
        resp1.filter(d => {
            if (d1.SubjectHead == d.subjectHeadId) {
                data.push({ ...d1, "SubjectHeadName": d.SubjectHead })
            }
        })
    })


    
    if (resp.length > 0) {
        result = { success: true, message: "  get successfully", status: 200, data: data }
    }
    else {
        result = { success: false, message: "   not  get", status: 200, data: data }
    }

    res.json(result)
}



const subjectToassignUpdateApi = async (req, res, next) => {
    let result = ""
   let status = false
   console.log(req.body);
   if (true) {
       let resp = await SubjectToHead.updateOne(
           {branchId: req.body.branchid, subjecttoHeadId:req.body.subjecttoHeadId},
           {
               $set:
               {
               Subjects: req.body.Subjects,
               SubjectCode: req.body.SubjectCode,
               Display: req.body.Display,
               }
           },
           { upsert: true }
       ).then((res) => res)
      
       status = true


   }
   else {
       result = { success: false, message: " pls insert Data", status: 200 }
   }
   if (status) {
       result = { success: true, message: " subject  update successfully", status: 200 }
   }
   else {
       result = { success: false, message: "subject  not update successfully ", status: 200 }
   }

   res.json(result)
}




module.exports = {
    feeHeadApi,
    getfeeHeadsApi,
    getAllfeeHeadsApi,
    sessionApi,
    getSessionApi,
    sessionControlApi,
    classApi,
    getClassApi,
    getSectionApi,
    SectionApi,
    getClassDetailApi,
    ClassDetailApi,
    ClassDetailUpdateApi,
    getClassDetailApiByclass,
    getOneClassApi,
    addBranchApi,
    getBranchApi,
    getBranchGroupIdApi,
    getSessionByBranchIdApi,
    subjectHeadApi,
    getAllsubjectHeadApi,
    getsubjectHeadApi,
    subjectApi,
    getsubjectApi,
    getAllsubjectApi,
    subjecttoHeadApi,
    getAllsubjecttoHeadApi,
    getsubjecttoHeadApi,
    FeeFrequencyApi,
    getFeeFrequencyApi,
    getAllFeeFrequencyApi,
    addBranchUpdateApi,
    getBranchOneApi,
    getBranchControlApi,
    sessionUpdateApi,
    classUpdateApi,
    classControlApi,
    sectionUpdateApi,
    sectionControlApi,
    feefrequencyUpdateApi,
    feefrequencyControlApi,
    getsubjectheadtosubjectApi,
    feeheadUpdateApi,
    subjectheadUpdateApi,
    subjectUpdateApi,
    subjectToassignUpdateApi,
    TimeSchedule,
    gettimescheduleApi,
    TimeScheduleUpdate,
    getClassDetailSomeApi,
    getSubjectWithSubjecttoheadApi,
    TimeTableApi,
    getTimeTableApi ,
    TimeTableUpdateApi,
    getClassDetailByClassApi,
    gettimetableperiodApi
}