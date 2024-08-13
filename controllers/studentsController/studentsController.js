const Class = require("../../models/Class");
const ClassDetails = require("../../models/ClassDetails");
const Student = require("../../models/Student")
const StudentFee = require("../../models/StudentFee")
/* const multer = require('multer')
var excelStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/excelUploads');      // file added to the public folder of the root directory
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
var excelUploads = multer({ storage: excelStorage }); */

const multer = require('multer')
const path = require('path');
const addBranch = require("../../models/addBranch");
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

const studentsFeeApi = async (req, res, next) => {
    let result = ""
    let resp = []
    let status = false
    if (req.body.firstname !== "") {
        resp = await StudentFee.find({}).then((res) => res)
        if (resp.length > 0) {
            let id = 0
            resp.map(d => {
                id = d.feeId
            })
            id++
            const res = new StudentFee({
                feeId: id,
                studentId: req.body.studentId,
                classDetailId: req.body.classDetailId,
                Deposited: req.body.Deposited,
                Rebat: req.body.Rebat,
                Due: req.body.Due,
                NextDate: req.body.NextDate,
                RecDate: req.body.RecDate,


            });
            res.save();
            status = true
        }
        else {
            const res = new StudentFee({
                feeId: 1,
                studentId: req.body.studentId,
                classDetailId: req.body.classDetailId,
                Deposited: req.body.Deposited,
                Rebat: req.body.Rebat,
                Due: req.body.Due,
                NextDate: req.body.NextDate,
                RecDate: req.body.RecDate,
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
        result = { success: false, message: "not create", status: 200 }
    }

    res.json(resp)
}

const getstudentsFeebyclassApi = async (req, res, next) => {
console.log("getstudentsFeebyclassApi",req.body);
let count =0
let classd=[]
let fee=[]
    let resp = await Student.find({ branchId: req.body.branchid ,sessionName:req.body.sessionId,}).then((res) => res)
 let stdata=[]
 if(req.body.classDetailId==""){
     fee = await StudentFee.find({ branchId: req.body.branchid,}).then((res) => res)
    console.log("feee details",fee);
    stdata = await Student.find({ branchId: req.body.branchid,sessionName:req.body.sessionId,})
     classd = await ClassDetails.find( {sessionId: req.body.sessionId  ,branchid: req.body.branchid,}).then((res) => res)
 }
 else{
    fee = await StudentFee.find({ branchId: req.body.branchid,classDetailId:req.body.classDetailId }).then((res) => res)
    console.log("feee details",fee);
    stdata = await Student.find({ branchId: req.body.branchid,sessionName:req.body.sessionId,ClassSection:req.body.classDetailId  })
    classd = await ClassDetails.find( {sessionId: req.body.sessionId  ,branchid: req.body.branchid,classDetailId:req.body.classDetailId}).then((res) => res)
 }
     let dataclasss = []
     let amount = 0
    
     classd.map( async(cl)=>{
        let amount=0
        
        cl.feeDetails.map(fd=>{
            amount+=parseInt( fd.fee)
        })
let count1=0
stdata.map(sd=>{
    if(sd.ClassSection==cl.classDetailId){
        count1++
    }
})
let deposited=0
let Rebat=0
fee.map(fe=>{
    if(fe.classDetailId==cl.classDetailId){
    deposited+=fe.Deposited
    Rebat+=fe.Rebat
    }

})

        dataclasss.push({"class":cl.classsection,"amount":amount,"count":count1,"deposited":deposited,"Rebat":Rebat})
     })
console.log(dataclasss);
let finaldata = dataclasss.filter(d=>d.count>0)
console.log(finaldata);
    if (resp.length > 0) {
        result = { success: true, message: "  get successfully", status: 200, data: finaldata ,studentcount:count}
    }
    else {
        result = { success: false, message: "   not  get", status: 200, data: resp }
    }

    res.json(result)
}



const getstudentsFeeApi = async (req, res, next) => {
console.log("fee",req.body);
    let fee = await StudentFee.find({ branchId: req.body.branchid }).then((res) => res)
    let resp = await Student.find({ branchId: req.body.branchid ,sessionName:req.body.session,}).then((res) => res)
    let count = await Student.find({ branchId: req.body.branchid,sessionName:req.body.session }).countDocuments()
     let classd = await ClassDetails.find({ branchid: req.body.branchid }).then((res) => res)

     let dataclasss = []
    resp.map(d => {
        let amount = 0
        classd.map(cc => {

            if (d.ClassSection == cc.classDetailId) {
                cc.feeDetails.map(ff => {
                    amount += parseInt(ff.fee)
                })
            }
        })
        let className=''
        classd.map(classname1=>{
           
            if (d.ClassSection == classname1.classDetailId) {
                className = classname1.classsection
            }
        })
        let fee1=0
        fee.map(f1=>{
            if (d.studentsId == f1.studentsId) {
                fee1+=f1.Deposited
            }
        })
        
        let feerebat1=0
        fee.map(f1=>{
            if (d.studentsId == f1.studentsId) {
                feerebat1+=f1.Rebat
            }
        })
let dat = { ...d._doc, amount: amount ,ClassName:className ,Deposited:fee1,Rebat:feerebat1 }
        dataclasss.push(dat)
    })


    if (resp.length > 0) {
        result = { success: true, message: "  get successfully", status: 200, data: dataclasss ,studentcount:count}
    }
    else {
        result = { success: false, message: "   not  get", status: 200, data: resp }
    }

    res.json(result)
}



const addStudentsFeeApi = async (req, res, next) => {
    let status = false
    let resfee = await StudentFee.find({ branchid: req.body.branchid }).then((res) => res)
    if (resfee.length > 0) {
        let id = 0
        resfee.map(d => {
            id = d.feeId
        })
        id++
        const res = new StudentFee({
            branchId: req.body.branchId,
            groupId: req.body.groupId,
            sessionName: req.body.sessionName,
            studentsId: req.body.studentsId,
            feeId: id,
            classDetailId: req.body.classDetailId,
            Deposited: req.body.Deposited,
            Rebat: req.body.Rebat,
            Due: req.body.Due,
            feeDetails: req.body.feeDetails,
            NextDate: req.body.NextDate,
            RecDate:req.body.RecDate ,
        });
        res.save();
        status = true
    }
    else {
        const res = new StudentFee({
            branchId: req.body.branchId,
            groupId: req.body.groupId,
            sessionName: req.body.sessionName,
            studentsId: req.body.studentsId,
            feeId: 1,
            classDetailId: req.body.classDetailId,
            Deposited: req.body.Deposited,
            Rebat: req.body.Rebat,
            Due: req.body.Due,
            feeDetails: req.body.feeDetails,
            NextDate: req.body.NextDate,
            RecDate:req.body.RecDate ,
        });
        res.save();

        status = true
    }

    if (status) {
        result = { success: true, message: " fee Submit successfully", status: 200 }
    }
    else {
        result = { success: false, message: " fee not Submit ", status: 200 }
    }
    res.json(result)
}


const getStudentByBranchFeeApi = async (req, res, next) => {
   
     let resp = await StudentFee.find({ branchId: req.body.branchId, studentsId: req.body.studentsId }).then((res) => res)
  
    if (resp.length > 0) {
        result = { success: true, message: "  get successfully", status: 200, data: resp }
    }
    else {
        result = { success: false, message: "   not  get", status: 200, data: resp }
    }
    res.json(result)
}



const studentLogin = async (req, res, next) => {


    let resp = await Student.find({ DOB: req.body.dob, MobileNo: req.body.mobile }).then((res) => res)

    if (resp.length > 0) {
        result = { success: true, message: "  get successfully", status: 200, data: resp }
    }
    else {
        result = { success: false, message: "   not  get", status: 200, data: resp }
    }
    res.json(result)
}







const displayStudentsClassBy = async (req, res, next) => {


    let resp = await Student.find({ classsection: req.body.classid }).then((res) => res)

    if (resp.length > 0) {
        result = { success: true, message: "  get successfully", status: 200, data: resp }
    }
    else {
        result = { success: false, message: "   not  get", status: 200, data: resp }
    }



    res.json(result)
}





const getDataStudentsApi = async (req, res, next) => {


    let resp = await Student.find({ branchId: req.body.branchId }).then((res) => res)

    if (resp.length > 0) {
        result = { success: true, message: "  get successfully", status: 200, data: resp }
    }
    else {
        result = { success: false, message: "   not  get", status: 200, data: resp }
    }



    res.json(result)
}






const studentAttendance = async (req, res, next) => {

    res.json("students attendanceinfo")
}




const studentsApi = async (req, res, next) => {


    upload(req, res, async function (err) {
        if (err) {

            res.send(err);
        } else {

            let result = ""
            let status1 = false
            console.log("ontis", req?.body)
            console.log("ontis file", req?.file)
            console.log("ontis",JSON.parse(req?.body?.params)) 
           const  {firstname,lastname
            ,fathername,
            mothername,
            email,dob,gender,physical,category,passowrd,
            mobile,address,area,pin,city,state,country,paddress,parea,ppin,pcity,pstate,pcountry
            ,previousschoolname,srno,previousclassname,registerpageno,registrationenrollno,
            classsection,admissiondate,root,stand,fare,status,otp,branchId,groupId,sessionName
            ,PreviousDueFees} = JSON.parse(req?.body?.params)



   if (firstname !== "") {
        let resp1 = await Student.find({branchId:branchId,RegistrationEnrollNo:registrationenrollno,sessionName:sessionName}).then((res) => res)
        if (resp1.length == 0) {
            let resp = await Student.find({branchId:branchId,sessionName:sessionName}).then((res) => res)
        if (resp.length > 0) {
            let id = 0
            resp.map(d => {
                id = d.studentsId
            })
            id++
            try{
            const res = new Student({

                studentsId: id,
                FirstName:firstname,
                LastName: lastname,
                FName: fathername,
                MotherName: mothername,
                EmailID: email,
                DOB: dob,
                Gender: gender,
                Phyical: physical,
                Category:category,
               
                MobileNo:mobile,
                CAddress:address,
                CArea: area,
                CPincode: pin,
                CCity: city,
                CState:state,
                CCountry:country,
                PAddress:paddress,
                PArea:parea,
                PPincode:ppin,
                PCity: pcity,
                PState:pstate,
                PCountry: pcountry,
                RTE: "",

                RegiterPageNo:registerpageno,
                RegistrationEnrollNo: registrationenrollno,
                ClassSection: classsection,
                AdmissionDate: admissiondate,

                Schoolname: previousschoolname,
                SRNo: srno,


                previousclassname: previousclassname,
                Root: root,
                Stand:stand,
                Fare: fare,
                status: "students",
                otp: otp,
                PreviousDueFees:PreviousDueFees,
                branchId: branchId,
                groupId: groupId,
                sessionName: sessionName,
                PreviousDueFees:PreviousDueFees,
                image: req.file==undefined?"":req.file.filename,


            })
            res.save();
            
            result = { success: true, message: "  create  successfully", status: 200 }
        }catch(error){
                console.log(error);
        }
        }
        else {
            try{
            const res = new Student({
                studentsId: 1,
               
                FirstName:firstname,
                LastName: lastname,
                FName: fathername,
                MotherName: mothername,
                EmailID: email,
                DOB: dob,
                Gender: gender,
                Phyical: physical,
                Category:category,
               
                MobileNo:mobile,
                CAddress:address,
                CArea: area,
                CPincode: pin,
                CCity: city,
                CState:state,
                CCountry:country,
                PAddress:paddress,
                PArea:parea,
                PPincode:ppin,
                PCity: pcity,
                PState:pstate,
                PCountry: pcountry,
                RTE: "",

                RegiterPageNo:registerpageno,
                RegistrationEnrollNo: registrationenrollno,
                ClassSection: classsection,
                AdmissionDate: admissiondate,

                Schoolname: previousschoolname,
                SRNo: srno,


                previousclassname: previousclassname,
                Root: root,
                Stand:stand,
                Fare: fare,
                status: "students",
                otp: otp,
                PreviousDueFees:PreviousDueFees,
                branchId: branchId,
                groupId: groupId,
                sessionName: sessionName,
                PreviousDueFees:PreviousDueFees,
                image: req.file==undefined?"":req.file.filename,


            })
            res.save();
            result = { success: true, message: "  create  successfully", status: 200 }
           
        }catch(error){
            console.log(error);
    }
        }
    }else{
        result = { success: false, message: "Registration roll No already exists", status: 200 }
    }

    }

    else {
        result = { success: false, message: " pls insert Data", status: 200 }
    } 
   
     res.json(result)
        }
    });
}





const getStudentUpdateApi = async(req,res,next)=>{
    upload(req, res, async function (err) {
        if (err) {

            res.send(err);
        } else {

            let result = ""
            //let status1 = false
           // console.log("ontis", req?.body)
            //console.log("ontis file", req?.file)
            //console.log("ontis",JSON.parse(req?.body?.params)) 
           const  {
            studentsId,
            firstname,lastname
            ,fathername,
            mothername,
            email,dob,gender,physical,category,passowrd,
            mobile,address,area,pin,city,state,country,paddress,parea,ppin,pcity,pstate,pcountry
            ,previousschoolname,srno,previousclassname,registerpageno,registrationenrollno,
            classsection,admissiondate,root,stand,fare,status,otp,branchId,groupId,sessionName
            ,PreviousDueFees} = JSON.parse(req?.body?.params)



       
            await Student.updateOne({  branchId:branchId,  studentsId:studentsId,groupId:groupId,sessionName: sessionName}, 
                {
                  $set: 
                     {
    

             
                FirstName:firstname,
                LastName: lastname,
                FName: fathername,
                MotherName: mothername,
                EmailID: email,
                DOB: dob,
                Gender: gender,
                Phyical: physical,
                Category:category,
               
                MobileNo:mobile,
                CAddress:address,
                CArea: area,
                CPincode: pin,
                CCity: city,
                CState:state,
                CCountry:country,
                PAddress:paddress,
                PArea:parea,
                PPincode:ppin,
                PCity: pcity,
                PState:pstate,
                PCountry: pcountry,
                RTE: "",

                RegiterPageNo:registerpageno,
                RegistrationEnrollNo: registrationenrollno,
                ClassSection: classsection,
                AdmissionDate: admissiondate,

                Schoolname: previousschoolname,
                SRNo: srno,


                previousclassname: previousclassname,
                Root: root,
                Stand:stand,
                Fare: fare,
                status: "students",
                otp: otp,
                PreviousDueFees:PreviousDueFees,
                branchId: branchId,
                groupId: groupId,
                sessionName: sessionName,
                PreviousDueFees:PreviousDueFees,
                image: req.file==undefined?"":req.file.filename,


            }
        }, 
        { upsert: true }
      ).then((res)=>res).then((data)=>{
        console.log("Students",data);
       
        if(data.modifiedCount>0){
            result={success:true,message:"Students  update successfully",status:200}
        }
        else{
            result={success:false,message:"Students update not ",status:200}  
        }
      })

     
   
     
res.json(result)
}
});

/* 

     await Student.updateOne({  branchId:req.body.branchId,  studentsId:req.body.studentsId,groupId:req.body.groupId,sessionName: req.body.sessionName}, 
                {
                  $set: 
                     {
                     
                     
                        FirstName: req.body.firstname,
                       LastName: req.body.lastname,
                        FName: req.body.fathername,
                        MotherName: req.body.mothername,
                        EmailID: req.body.email,
                        DOB: req.body.dob,
                        Gender: req.body.gender,
                        Phyical: req.body.physical,
                        Category: req.body.category,
                        password: req.body.password,
                        MobileNo: req.body.mobile,
                        CAddress: req.body.address,
                        CArea: req.body.area,
                        CPincode: req.body.pin,
                        CCity: req.body.city,
                        CState: req.body.state,
                        CCountry: req.body.country,
                        PAddress: req.body.paddress,
                        PArea: req.body.parea,
                        PPincode: req.body.ppin,
                        PCity: req.body.pcity,
                        PState: req.body.pstate,
                        PCountry: req.body.pcountry,
                        RTE: req.body.rte,
        
                        RegiterPageNo: req.body.registerpageno,
                        RegistrationEnrollNo: req.body.registrationenrollno,
                        ClassSection: req.body.classsection,
                        AdmissionDate: req.body.admissiondate,
        
                        Schoolname: req.body.previousschoolname,
                        SRNo: req.body.srno,
                        previousclassname: req.body.previousclassname,
                        Root: req.body.root,
                        Stand: req.body.stand,
                        Fare: req.body.fare,
                      
                        PreviousDueFees: req.body.PreviousDueFees, 
                        }
                }, 
                { upsert: true }
              ).then((res)=>res).then((data)=>{
                console.log("Students",data);
                status=true
                if(data.modifiedCount>0){
                    result={success:true,message:"Students  update successfully",status:200}
                }
                else{
                    result={success:false,message:"Students update not ",status:200}  
                }
              })
     res.json(result)   */
}

const StudentUpdateWithoutimageApi = async(req,res,next)=>{
   
            let result = ""
            //let status1 = false
           // console.log("ontis", req?.body)
            //console.log("ontis file", req?.file)
            //console.log("ontis",JSON.parse(req?.body?.params)) 
           const  {
            studentsId,
            firstname,lastname
            ,fathername,
            mothername,
            email,dob,gender,physical,category,passowrd,
            mobile,address,area,pin,city,state,country,paddress,parea,ppin,pcity,pstate,pcountry
            ,previousschoolname,srno,previousclassname,registerpageno,registrationenrollno,
            classsection,admissiondate,root,stand,fare,status,otp,branchId,groupId,sessionName
            ,PreviousDueFees} = req?.body



       
            await Student.updateOne({  branchId:branchId,  studentsId:studentsId,groupId:groupId,sessionName: sessionName}, 
                {
                  $set: 
                     {
    

             
                FirstName:firstname,
                LastName: lastname,
                FName: fathername,
                MotherName: mothername,
                EmailID: email,
                DOB: dob,
                Gender: gender,
                Phyical: physical,
                Category:category,
               
                MobileNo:mobile,
                CAddress:address,
                CArea: area,
                CPincode: pin,
                CCity: city,
                CState:state,
                CCountry:country,
                PAddress:paddress,
                PArea:parea,
                PPincode:ppin,
                PCity: pcity,
                PState:pstate,
                PCountry: pcountry,
                RTE: "",

                RegiterPageNo:registerpageno,
                RegistrationEnrollNo: registrationenrollno,
                ClassSection: classsection,
                AdmissionDate: admissiondate,

                Schoolname: previousschoolname,
                SRNo: srno,


                previousclassname: previousclassname,
                Root: root,
                Stand:stand,
                Fare: fare,
                status: "students",
                otp: otp,
                PreviousDueFees:PreviousDueFees,
                branchId: branchId,
                groupId: groupId,
                sessionName: sessionName,
                PreviousDueFees:PreviousDueFees,
              


            }
        }, 
        { upsert: true }
      ).then((res)=>res).then((data)=>{
        console.log("Students",data);
       
        if(data.modifiedCount>0){
            result={success:true,message:"Students  update successfully",status:200}
        }
        else{
            result={success:false,message:"Students update not ",status:200}  
        }
      })

     
   
     
res.json(result)


}


const getStudentsPageApi = async (req, res, next) => {
    const{ currentpage, limit, branchid, session,selectclass} = req?.query
    console.log(req.query);
    let studata = []
    let count = await Student.find({$or:[{ branchId: branchid},{ branchId: branchid,ClassSection:selectclass}]}).countDocuments()
    console.log("stydent count=>>",count);
    let classres = await ClassDetails.find({ branchid: branchid }).then((res) => res)
    let page = currentpage >= 1 ? currentpage : 1;
    page = page - 1

     await Student.find({$or:[{ branchId: branchid, sessionName: session},{ branchId: branchid, sessionName: session,ClassSection:selectclass}]})
                .sort({studentsId: "asc" })
                .limit(limit)
                .skip(limit * page)
                .then((results) => {
                    datar = results.map(d => {
                let classname = ""
                classres.map(classdaat => {
                    if (d.ClassSection == classdaat.classDetailId) {
                        classname = classdaat.classsection
                    }
                })
                studata.push({ ...d._doc, className: classname })
            })
           /*  console.log("students=>>",studata); */
             return res.status(200).send({success: true, message: "  get successfully", status: 200, data: {studata,studentCount:count }});
        })
        .catch((err) => {
            return res.status(500).send({success:false, message: "Error", status: 500,data:err});
        }); 
  /* 
   
   
   
    datar = resp.map(d => {
        let classname = ""
        classres.map(classdaat => {
            if (d.ClassSection == classdaat.classDetailId) {
                classname = classdaat.classsection
            }
        })
        studata.push({ ...d._doc, className: classname })
    })
    studata["studentCount"]=count
    if (resp.length > 0) {
        result = { success: true, message: "  get successfully", status: 200, data: {studata,studentCount:count }}
    }
    else {
        result = { success: false, message: "   not  get", status: 200, data: resp }
    }

    res.json(result) */
}









const getStudentsApi = async (req, res, next) => {
console.log("data get branchidand session id on getStudentsApi",req.body);
    let studata = []
    let resp = await Student.find({$or:[{ branchId: req.body.branchId, sessionName: req.body.sessionName },{ branchId: req.body.branchId, sessionName: req.body.sessionName ,ClassSection:req.body.classdata}]}).then((res) => res)
    let classres = await ClassDetails.find({ branchid: req.body.branchId }).then((res) => res)
    let count = await Student.find({ branchId: req.body.branchId, sessionName: req.body.sessionName}).countDocuments()
    datar = resp.map(d => {

        let classname = ""
        classres.map(classdaat => {
            if (d.ClassSection == classdaat.classDetailId) {
                classname = classdaat.classsection
            }
        })
        studata.push({ ...d._doc, className: classname })
    })
    studata["studentCount"]=count

    if (resp.length > 0) {
        result = { success: true, message: "  get successfully", status: 200, data: {studata,studentCount:count }}
    }
    else {
        result = { success: false, message: "   not  get", status: 200, data: resp }
    }

    res.json(result)
}




const getStudentOneinfoApi = async (req, res, next) => {
    console.log("dgetStudentOneinfoApi",req.body);
        let studata = []
        const {branchId,sessionName,studentId} =req?.body
        let resp = await Student.find({ branchId: branchId, sessionName: sessionName,studentsId:studentId }).then((res) => res)
        let classres = await ClassDetails.find({ branchid:branchId ,sessionId: sessionName,}).then((res) => res)
        let branch = await addBranch.find({ branchId: branchId }).then((res) => res)
        console.log("b=>",branch);
        console.log("s=>",resp);
        console.log("cs=>",classres);
       
       
        resp.map(d => {
    
            let classname = ""
            classres.map(classdaat => {
                if (d.ClassSection == classdaat.classDetailId) {
                    classname = classdaat.classsection
                }
            })
            studata.push({ ...d._doc, className: classname ,branchphone:branch[0].branchemail,branchname:branch[0].branchname,branchlogo:branch[0].logo,branchweb:branch[0].website,branchphone:branch[0].phone,branchmobile:branch[0].mobile,})
        })
      
    
        if (resp.length > 0) {
            result = { success: true, message: "  get successfully", status: 200, data: studata }
        }
        else {
            result = { success: false, message: "   not  get", status: 200, data: resp }
        }
    
        res.json(result)
    }
    





const getStudentsByClassApi = async (req, res, next) => {
console.log(req.body);
    let studata = []
    let resp = await Student.find({ branchId: req.body.branchId, sessionName: req.body.sessionName ,ClassSection:req.body.classdata}).then((res) => res)
    let classres = await ClassDetails.find({ branchid: req.body.branchId }).then((res) => res)
    let count = await Student.find({ branchId: req.body.branchId, sessionName: req.body.sessionName}).countDocuments()
    datar = resp.map(d => {

        let classname = ""
        classres.map(classdaat => {
            if (d.ClassSection == classdaat.classDetailId) {
                classname = classdaat.classsection
            }
        })
        studata.push({ ...d._doc, className: classname })
    })
    studata["studentCount"]=count

    if (resp.length > 0) {
        result = { success: true, message: "  get successfully", status: 200, data: {studata,studentCount:count }}
    }
    else {
        result = { success: false, message: "   not  get", status: 200, data: resp }
    }

    res.json(result)
}







//***************************************** */




const downloadApi = async (req, res, next) => {
    const filePath = __dirname + "/public/excelUploads/studentmgmt.xlsx";
    res.download(
        filePath,
        "studentmgmt.xlsx", // Remember to include file extension
        (err) => {
            if (err) {
                res.send({
                    error: err,
                    msg: "Problem downloading the file"
                })
            }
        });

}
const uploadExcelFile = async (req, res, next) => {


    /* 
    
        var multiparty = require('multiparty');
        var form = new multiparty.Form();
        var fs = require('fs');
        
        form.parse(req, function(err, fields, files) {  
            var imgArray = files.imatges;
        
        
            for (var i = 0; i < imgArray.length; i++) {
                var newPath = './public/uploads/'+fields.file+'/';
                var singleImg = imgArray[i];
                newPath+= singleImg.originalFilename;
                readAndWriteFile(singleImg, newPath);           
            }
            res.send("File uploaded to: " + newPath);
        
        });
        
        function readAndWriteFile(singleImg, newPath) {
        
                fs.readFile(singleImg.path , function(err,data) {
                    fs.writeFile(newPath,data, function(err) {
                        if (err) console.log('ERRRRRR!! :'+err);
                        console.log('Fitxer: '+singleImg.originalFilename +' - '+ newPath);
                    })
                })
        }
    
     */



    c

    importFile('./public' + '/excelUploads/' + req.file.filename);
    function importFile(filePath) {
      ;
        const file = reader.readFile(filePath)
        let data = []
        const sheets = file.SheetNames
      
        for (let i = 0; i < sheets.length; i++) {
            const temp = reader.utils.sheet_to_json(
                file.Sheets[file.SheetNames[i]])
            temp.forEach((res, index) => {
                
                res["studentsId"] = index + 1
                res["ClassSection"] = req.body.class
                data.push(res)
            })
        }
  
        Student.insertMany(data)
            .then(function () {
              
            })
            .catch(function (err) {
              
            });

    }


    res.json("fbfhfghgfh")
}

//******************************** */

module.exports = {
    studentsApi,
    getStudentsApi,
    displayStudentsClassBy,
    studentAttendance,
    studentsFeeApi,
    getstudentsFeeApi,
    studentLogin,
    uploadExcelFile,
    downloadApi,
    addStudentsFeeApi,
    getStudentByBranchFeeApi,
    getDataStudentsApi,
    getStudentsPageApi,
    getStudentUpdateApi,
    getStudentsByClassApi,
    StudentUpdateWithoutimageApi,
    getstudentsFeebyclassApi,
    getStudentOneinfoApi
}
