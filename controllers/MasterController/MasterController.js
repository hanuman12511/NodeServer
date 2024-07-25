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

const storage = multer.memoryStorage();
const upload = multer({ storage });


const addBranchApi = async(req,res) =>{
    let result=""
   
    if(true){
          
          
            if(req.body.groupStatus!==undefined){
                let resp1 = await addBranch.find({mobile:req.body.mobile}).then((res)=>res)
                if(resp1.length==0){
                const res = new addBranch({
                    groupName:req.body.groupName?req.body.groupName:"",
                    groupStatus:req.body.groupStatus?req.body.groupStatus:"",
                    branchId:0,
                    adminemail:req.body.adminemail,
                    groupId:req.body.groupId,
                    branchname:req.body.name,
                    institutename:req.body.institutename,
                    affiliation:req.body.affiliation,
                    affiliated:req.body.affiliated,
                    medium:req.body.medium,
                    phone:req.body.phone,
                    branchemail:req.body.email,
                    password:req.body.password,
                    username:req.body.username,
                    mobile:req.body.mobile,
                    contactperson:req.body.contactperson,
                    Address:req.body.Address,
                    registerno:req.body.registerno,
                    established:req.body.established,
                    website:req.body.website,
                    logo:req.body.logo,
                    branchControl:req.body.branchControl,
                    status:"mainadmin",
                    otp:"0000"
                     });
                res.save();
                result={success:true,message:" Group create  successfully",status:200}
            }
                else{
                    result={success:true,message:"pls enter another number",status:200}
                }
            }
            else{

                let resp = await addBranch.find({}).then((res)=>res)
            
            if(resp.length>0){
                let resp1 = await addBranch.find({mobile:req.body.mobile}).then((res)=>res)
              
                if(resp1.length==0){
                   
                let id = 0
                resp.map(d=>{
                    id=d.branchId
                })
                 id++  
                     const res = new addBranch({
                    groupName:req.body.groupName?req.body.groupName:"",
                    groupStatus:req.body.groupStatus?req.body.groupStatus:"",
                    branchId:id,
                    adminemail:req.body.adminemail,
                    groupId:req.body.groupId,
                    branchname:req.body.name,
                    institutename:req.body.institutename,
                    affiliation:req.body.affiliation,
                    affiliated:req.body.affiliated,
                    medium:req.body.medium,
                    phone:req.body.phone,
                    branchemail:req.body.email,
                    password:req.body.password,
                    username:req.body.username,
                    mobile:req.body.mobile,
                    contactperson:req.body.contactperson,
                    Address:req.body.Address,
                    registerno:req.body.registerno,
                    established:req.body.established,
                    website:req.body.website,
                    logo:req.body.logo,
                    branchControl:req.body.branchControl,
                    status:"admin",
                    otp:"0000"
                     });
                res.save();
                result={success:true,message:" branch create  successfully",status:200}
                }
                else{
                    result={success:false,message:" pls change mobile number",status:200}   
                     
                }    
            }
                else{
                    const res = new addBranch({
                        groupName:req.body.groupName,
                        groupStatus:req.body.groupStatus?req.body.groupStatus:"",
                        branchId:1,
                        adminemail:req.body.adminemail,
                        groupId:req.body.groupId,
                        branchname:req.body.name,
                        institutename:req.body.institutename,
                        affiliation:req.body.affiliation,
                        affiliated:req.body.affiliated,
                        medium:req.body.medium,
                        phone:req.body.phone,
                        branchemail:req.body.email,
                        password:req.body.password,
                        username:req.body.username,
                        mobile:req.body.mobile,
                        contactperson:req.body.contactperson,
                        Address:req.body.Address,
                        registerno:req.body.registerno,
                        established:req.body.established,
                        website:req.body.website,
                        logo:req.body.logo,
                        branchControl:req.body.branchControl,
                        status:"admin",
                        otp:"0000"
                        
                                     
                        });
                    res.save();
                    result={success:true,message:" branch create  successfully",status:200}
                }

            }
        }
        else{
         result= {success:false,message:" pls insert Data",status:200}
        }
      
     
        
    res.json(result)     
}

const addBranchUpdateApi = async(req,res) =>{
    let result=""
    try {
        
  
    let status= false
    console.log("data=>>",req.file?req.file:null);
    console.log("data=>>",req.body?req.body:null);
    if(true){
           // let resp = await addBranch.find({}).then((res)=>res)
            let resp =  await addBranch.updateOne( 
                {$or:[{ branchId:req.body. branchId}, { groupId:req.body.groupId  }]}, 
                {
                  $set: 
                            {
                       
                        groupName:req.body.groupName,
                        name:req.body.name,
                        institutename:req.body.institutename,
                        affiliation:req.body.affiliation,
                        affiliated:req.body.affiliated,
                        medium:req.body.medium,
                        phone:req.body.phone,
                        branchemail:req.body.email,
                        password:req.body.password,
                        username:req.body.username,
                        mobile:req.body.mobile,
                        contactperson:req.body.contactperson,
                        Address:req.body.Address,
                        registerno:req.body.registerno,
                        established:req.body.established,
                        website:req.body.website,
                        logo:req.body.logo,
                       
                    }
                }, 
                { upsert: true }
              ).then((res1)=>res1)
                  
                    status=true
                    result={success:true,message:" branch create  successfully",status:200}
                res.json(result)
        }
        else{
         result= {success:false,message:" pls insert Data",status:200}
        }
        if(status){
            result={success:true,message:" branch create  successfully",status:200}
        }
        else{
            result={success:false,message:" branch head not create",status:200}  
        }

        
    } catch (error) {
    next(error)   
    }
        
    res.json(result)     
}


const getBranchApi = async(req,res,next)=>{
    let resp = await addBranch.find({}).then((res)=>res)
   if(resp.length>0){
    result={success:true,message:" get successfully",status:200,data:resp}
}
else{
    result={success:false,message:"  not  get",status:200,data:resp}  
}
res.json(result)
}


const getBranchOneApi = async(req,res,next)=>{

    let resp = await addBranch.findOne({$or: [{branchId:req.body.branchId},{ groupId:req.body.groupId}]}).then((res)=>res)
    if(resp.length>0){
    result={success:true,message:" get successfully",status:200,data:resp}
}
else{
    result={success:false,message:"  not  get",status:200,data:resp}  
}
res.json(result)
}
const getBranchControlApi = async(req,res,next)=>{

    let result=""
    let status= false
    console.log("data=>>",req.file);
    console.log("data=>>",req.body);
    if(true){
          
            let resp =  await addBranch.updateOne( 
                { branchId:req.body. branchId}, 
                {
                  $set: 
                            {
                       
                                branchControl:req.body.branchControl,
                       
                    }
                }, 
                { upsert: true }
              ).then((res)=>res)
                  console.log(res);
                    status=true
        
                
        }
        else{
         result= {success:false,message:" pls insert Data",status:200}
        }
        if(status){
            result={success:true,message:" branch   control update successfully",status:200}
        }
        else{
            result={success:false,message:" branch control update not ",status:200}  
        }
        
    res.json(result)  
}



const getBranchGroupIdApi = async(req,res,next)=>{
    let resp = await addBranch.find({groupId:req.body.id,groupStatus:""}).then((res)=>res)
   if(resp.length>0){
    result={success:true,message:" get successfully",status:200,data:resp}
}
else{
    result={success:false,message:"  not  get",status:200,data:resp}  
}
res.json(result)
}



const feeHeadApi = async(req,res,next)=>{
    let result=""
    let status= false
    if(req.body.feeheadname!=="" && req.body.feefrequency!==""){
            let resp = await FeeHeads.find({}).then((res)=>res)
            if(resp.length>0){
                let id = 0
                resp.map(d=>{
                    id=d.feeHeadId
                })
                 id++  
                    const res = new FeeHeads({
                       
                        FeeHead:req.body.feehead,
                        branchid:req.body.branchid,
                        groupid:req.body.groupid,
                        feeHeadId:id,
                        FeeFrequencyId:req.body.feefrequency,
                        Display:req.body.Display
                    });
                res.save();
                status=true
                }
                else{
                    const res = new FeeHeads({
                       
                        FeeHead:req.body.feehead,
                        branchid:req.body.branchid,
                        groupid:req.body.groupid,
                        feeHeadId:1,
                        FeeFrequencyId:req.body.feefrequency,
                      
                        Display:req.body.Display
                        
                    });
                    res.save();
                
                    status=true
                }
        }
        else{
         result= {success:false,message:" pls insert Data",status:200}
        }
        if(status){
            result={success:true,message:" fee head create  successfully",status:200}
        }
        else{
            result={success:false,message:" fee head not create",status:200}  
        }
        
    res.json(result)
}

const getfeeHeadsApi = async(req,res,next)=>{
   
    let resp = await FeeHeads.find({branchid:req.body.branchid}).then((res)=>res)
   
if(resp.length>0){
    result={success:true,message:" feeheads get successfully",status:200,data:resp}
}
else{
    result={success:false,message:" feeheads  not  get",status:200,data:resp}  
}

res.json(result)
}


const getAllfeeHeadsApi = async(req,res,next)=>{
   
    let resp = await FeeHeads.find({branchid:req.body.branchid}).then((res)=>res)
   
if(resp.length>0){
    result={success:true,message:" feeheads get successfully",status:200,data:resp}
}
else{
    result={success:false,message:" feeheads  not  get",status:200,data:resp}  
}

res.json(result)
}


const sessionApi = async(req,res,next)=>{
    let result=""
    let status= false
  console.log(req.body);
    if(req.body.session!=="" && req.body.month!==""){
        
        let resp1= await SessionHeads.find({SessionName:req.body.session}).then((res)=>res)
 
        if(Object.keys(resp1).length==0){
            let resp = await SessionHeads.find({}).then((res)=>res)
           
            if(resp.length>0){
                let id = 0
                resp.map(d=>{
                    id=d.sessionId
                })
                 id++  
                    const res = new SessionHeads({
                       
                        sessionId:id,
                        SessionName:req.body.session,
                        StartMonth:req.body.month,
                        branchid:req.body.branchid,
                        groupid:req.body.groupid,
                        branchControl:true,
                      
                    });
                res.save();
                status=true
                }
                else{
                    const res = new SessionHeads({
                        sessionId:1,
                        SessionName:req.body.session,
                        StartMonth:req.body.month,
                        branchid:req.body.branchid,
                        groupid:req.body.groupid,
                        branchControl:true,
                    });
                res.save();
                
                    status=true
                }
        }
        else{
         result= {success:false,message:" pls insert Data",status:200}
        }
        if(status){
            result={success:true,message:"  session head create  successfully",status:200}
        }
        else{
            result={success:false,message:"  session head already exists ",status:200}  
        }
    }else{
        result={success:false,message:"pls change session name",status:200}  
    }
        
    res.json(result)
}


const getSessionApi = async(req,res,next)=>{
   
            let resp = await SessionHeads.find({}).then((res)=>res)
           
        if(resp.length>0){
            result={success:true,message:" session  get successfully",status:200,data:resp}
        }
        else{
            result={success:false,message:"  session  not  get",status:200,data:resp}  
        }
        
    res.json(result)
}

const sessionUpdateApi = async(req,res,next)=>{
    let result=""
    let status= false
   
    console.log("data=>>",req.body);
    let resp1= await SessionHeads.find({SessionName:req.body.session}).then((res)=>res)
    console.log(Object.keys(resp1).length);
    if(Object.keys(resp1).length==0){
    
          
           await SessionHeads.updateOne( 
                { branchid:req.body. branchId, sessionId:req.body.sessionId,groupid:req.body.groupid}, 
                {
                  $set: 
                     {
                       
                        SessionName:req.body.session,
                        StartMonth:req.body.month
                       }
                }, 
                { upsert: true }
              ).then((res)=>res).then((data)=>{
                console.log(data);
                status=true
                if(status){
                    result={success:true,message:" session update successfully",status:200}
                }
                else{
                    result={success:false,message:" session update not ",status:200}  
                }
              })
                   
         }
        else{
         result= {success:false,message:" pls change Data",status:200}
        }
        
        
    res.json(result)  
}







const sessionControlApi = async(req,res,next)=>{

    let result=""
    let status= false
    if(true){
          
             await SessionHeads.updateOne( 
                {  sessionId:req.body. sessionId}, 
                {
                  $set: 
                            {
                       
                                branchControl:req.body.branchControl,
                       
                    }
                }, 
                { upsert: true }
              ).then((res)=>res)
                  console.log(res);
                    status=true
        
                
        }
        else{
         result= {success:false,message:" pls insert Data",status:200}
        }
        if(status){
            result={success:true,message:" session  control update successfully",status:200}
        }
        else{
            result={success:false,message:" session control update not ",status:200}  
        }
        
    res.json(result)  
}






const getSessionByBranchIdApi = async(req,res,next)=>{
   
    let resp = await SessionHeads.find({ branchid:req.body.id}).then((res)=>res)
   
if(resp.length>0){
    result={success:true,message:" session  get successfully",status:200,data:resp}
}
else{
    result={success:false,message:"  session  not  get",status:200,data:resp}  
}

res.json(result)
}

const classApi = async(req,res,next)=>{
    let result=""
    let status= false
    console.log("data=>>",req.body);
    let resp1= await Class.find({Class:req.body.ClassName,branchid:req.body.branchid}).then((res)=>res)
    console.log(Object.keys(resp1).length);
    if(Object.keys(resp1).length==0){

    if(req.body.ClassName!==""){
            let resp = await Class.find({}).then((res)=>res)
            if(resp.length>0){
                let id = 0
                resp.map(d=>{
                    id=d.classId
                })
                 id++  
                    const res = new Class({
                       
                        classId:id,
                        branchid:req.body.branchid,
                        groupid:req.body.branchid,
                        Class:req.body.ClassName,
                        branchControl:true
                        });
                res.save();
                status=true
                }
                else{
                    const res = new Class({
                       
                        classId:1,
                        branchid:req.body.branchId,
                        groupid:req.body.branchId,
                        Class:req.body.ClassName,
                        branchControl:true
                        
                    });
                res.save();
                
                    status=true
                }
        }
        else{
         result= {success:false,message:" pls insert Data",status:200}
        }

    }else{
        result= {success:false,message:" pls change class name ",status:200}  
    }
        if(status){
            result={success:true,message:"  class create  successfully",status:200}
        }
        else{
            result={success:false,message:"  class not create",status:200}  
        }
        
    res.json(result)
}



const classUpdateApi = async(req,res,next)=>{
    let result=""
    let status= false
   
    console.log("data=>>",req.body);
    let resp1= await Class.find({Class:req.body.Class}).then((res)=>res)
    console.log(Object.keys(resp1).length);
    if(Object.keys(resp1).length==0){
    
          
           await Class.updateOne( 
                { branchid:req.body.branchId,groupid:req.body.groupid,classId:req.body.classId}, 
                {
                  $set: 
                     {
                       
                        Class:req.body.Class,
                       
                       }
                }, 
                { upsert: true }
              ).then((res)=>res).then((data)=>{
                console.log(data);
                status=true
                if(status){
                    result={success:true,message:" class update successfully",status:200}
                }
                else{
                    result={success:false,message:" class update not ",status:200}  
                }
              })
                   
         }
        else{
         result= {success:false,message:" pls change Data",status:200}
        }
        
        
    res.json(result)  
}




const classControlApi = async(req,res,next)=>{

    let result=""
    let status= false
    if(true){
          
             await Class.updateOne( 
                {  classId:req.body.classId}, 
                {
                  $set: 
                            {
                       
                                branchControl:req.body.branchControl,
                       
                    }
                }, 
                { upsert: true }
              ).then((res)=>res)
                  console.log(res);
                    status=true
        
                
        }
        else{
         result= {success:false,message:" pls insert Data",status:200}
        }
        if(status){
            result={success:true,message:" class  control update successfully",status:200}
        }
        else{
            result={success:false,message:" class control update not ",status:200}  
        }
        
    res.json(result)  
}







const getClassApi = async(req,res,next)=>{
   console.log(req.body);
    let resp = await Class.find({groupid:req.body.branchId}).then((res)=>res)
   
if(resp.length>0){
    result={success:true,message:" addClass  get successfully",status:200,data:resp}
}
else{
    result={success:false,message:"  addClass  not  get",status:200,data:resp}  
}

res.json(result)
}


const getOneClassApi = async(req,res,next)=>{
   let classid = req.body.classid
    let resp = await Class.find({classId:classid}).then((res)=>res)
   
if(resp.length>0){
    result={success:true,message:"   get class successfully",status:200,data:resp}
}
else{
    result={success:false,message:"    not  get classs",status:200,data:resp}  
}

res.json(result)
}





const getSectionApi = async(req,res,next)=>{
   
    let resp = await addSection.find({branchid:req.body.branchid}).then((res)=>res)
   
if(resp.length>0){
    result={success:true,message:" addSection get successfully",status:200,data:resp}
}
else{
    result={success:false,message:"  addSection not  get",status:200,data:resp}  
}

res.json(result)
}

const SectionApi = async(req,res,next)=>{
    let result=""
    let status= false
    if(req.body.Sectionname!==""){
        console.log(req.body);
        let resp1= await addSection.find({ SectionName:req.body.SectionName}).then((res)=>res)
       console.log(resp1);
        if(Object.keys(resp1).length==0){
             let resp = await addSection.find({}).then((res)=>res)
             if(resp.length>0){
                let id = 0
                resp.map(d=>{
                    id=d.sectionId
                })
                 id++  
                    const res = new addSection({
                        branchid:req.body.branchid,
                        groupid:req.body.branchid,
                        sectionId:id,
                        SectionName:req.body.SectionName,
                        branchControl:true
                    });
                res.save();
                status=true
                }
                else{
                    const res = new addSection({
                        branchid:req.body.branchid,
                        groupid:req.body.branchid,
                        sectionId:1,
                        SectionName:req.body.SectionName,
                        branchControl:true
                    });
                res.save();
                
                    status=true
                }
        }
        else{
         result= {success:false,message:" pls insert Data",status:200}
        }
        if(status){
            result={success:true,message:"  create  successfully",status:200}
        }
        else{
            result={success:false,message:"  section already exists",status:200}  
        }
    }else{
        result={success:false,message:" pls fill data",status:200}  
    }
        
    res.json(result)
}



const sectionUpdateApi = async(req,res,next)=>{
    let result=""
    let status= false
   
    console.log("data=>>",req.body);
    let resp1= await addSection.find({ SectionName:req.body.Sectionname}).then((res)=>res)
    console.log(Object.keys(resp1).length);
    if(Object.keys(resp1).length==0){
    
          
           await addSection.updateOne( 
                { branchid:req.body.branchId,groupid:req.body.groupid,sectionId:req.body.sectionId}, 
                {
                  $set: 
                     {
                       
                        SectionName:req.body.Sectionname,
                       
                       }
                }, 
                { upsert: true }
              ).then((res)=>res).then((data)=>{
                console.log(data);
                status=true
                if(status){
                    result={success:true,message:" section update successfully",status:200}
                }
                else{
                    result={success:false,message:" section update not ",status:200}  
                }
              })
                   
         }
        else{
         result= {success:false,message:" pls change Data",status:200}
        }
        
        
    res.json(result)  
}




const sectionControlApi = async(req,res,next)=>{

    let result=""
    let status= false
    if(true){
          
             await addSection.updateOne( 
                { sectionId:req.body.sectionId}, 
                {
                  $set: 
                            {
                       
                                branchControl:req.body.branchControl,
                       
                    }
                }, 
                { upsert: true }
              ).then((res)=>res)
                  console.log(res);
                    status=true
        
                
        }
        else{
         result= {success:false,message:" pls insert Data",status:200}
        }
        if(status){
            result={success:true,message:" class  control update successfully",status:200}
        }
        else{
            result={success:false,message:" sectioncontrol update not ",status:200}  
        }
        
    res.json(result)  
}






const FeeFrequencyApi = async(req,res,next)=>{
    let result=""
    let status= false
    if(req.body.feefrequency!==""){
        console.log(req.body);
        let resp1= await  FeeFrequency.find({ FeeFrequency:req.body.feefrequency}).then((res)=>res)
        console.log("=>",resp1);
        if(Object.keys(resp1).length==0){
   
            let resp = await FeeFrequency.find({}).then((res)=>res)
            if(resp.length>0){
                let id = 0
                resp.map(d=>{
                    id=d. feefrequencyId
                })
                 id++  
                    const res = new FeeFrequency({
                        branchid:req.body.branchid,
                        groupid:req.body.groupid,
                        feefrequencyId:id,
                        FeeFrequency:req.body.feefrequency,
                        Display:req.body.Display,
                        branchControl:true
                    });
                res.save();
                status=true
                }
                else{
                    const res = new FeeFrequency({
                        branchid:req.body.branchId,
                        groupid:req.body.groupId,
                        feefrequencyId:1,
                        FeeFrequency:req.body.FeeFrequency,
                        Display:req.body.Display,
                        branchControl:true
                    });
                res.save();
                
                    status=true
                }
        }
        else{
         result= {success:false,message:" pls insert Data",status:200}
        }
        if(status){
            result={success:true,message:"  create  successfully",status:200}
        }
        else{
            result={success:false,message:"  not create",status:200}  
        }
    }else{

    }
        
    res.json(result)
}



const feefrequencyUpdateApi = async(req,res,next)=>{
    let result=""
    let status= false
   
    console.log("data=>>",req.body);
    let resp1= await FeeFrequency.find({ FeeFrequency:req.body.FeeFrequency}).then((res)=>res)
    console.log(Object.keys(resp1).length);
    if(Object.keys(resp1).length==0){
         await FeeFrequency.updateOne( 
                { branchid:req.body.branchId,groupid:req.body.groupid, feefrequencyId:req.body. feefrequencyId}, 
                {
                  $set: 
                     {
                       
                        FeeFrequency:req.body. FeeFrequency,
                       
                       }
                }, 
                { upsert: true }
              ).then((res)=>res).then((data)=>{
                console.log(data);
                status=true
                if(status){
                    result={success:true,message:" section update successfully",status:200}
                }
                else{
                    result={success:false,message:" section update not ",status:200}  
                }
              })
                   
         }
        else{
         result= {success:false,message:" pls change Data",status:200}
        }
        
        
    res.json(result)  
}




const feefrequencyControlApi = async(req,res,next)=>{

    let result=""
    let status= false
    if(true){
          
             await FeeFrequency.updateOne( 
                { feefrequencyId:req.body.feefrequencyId}, 
                {
                  $set: 
                            {
                       
                                branchControl:req.body.branchControl,
                       
                    }
                }, 
                { upsert: true }
              ).then((res)=>res)
                  console.log(res);
                    status=true
        
                
        }
        else{
         result= {success:false,message:" pls insert Data",status:200}
        }
        if(status){
            result={success:true,message:" class  control update successfully",status:200}
        }
        else{
            result={success:false,message:" sectioncontrol update not ",status:200}  
        }
        
    res.json(result)  
}




const getFeeFrequencyApi = async(req,res,next)=>{
   
    let resp = await FeeFrequency.find({ branchid:req.body.branchid}).then((res)=>res)
   
if(resp.length>0){
    result={success:true,message:"  get successfully",status:200,data:resp}
}
else{
    result={success:false,message:"   not  get",status:200,data:resp}  
}

res.json(result)
}


const getAllFeeFrequencyApi = async(req,res,next)=>{
   
    let resp = await FeeFrequency.find({branchid:req.body.branchid}).then((res)=>res)
   
if(resp.length>0){
    result={success:true,message:"  get successfully",status:200,data:resp}
}
else{
    result={success:false,message:"   not  get",status:200,data:resp}  
}

res.json(result)
}





const ClassDetailApi = async(req,res,next)=>{
    let result=""
    let status= false
   
    if(req.body.Class!==""){
    
        await ClassDetails.find({ClassId:req.body.Class}).then((res)=>res).then(async(data)=>{

            if(Object.keys(data).length>0){
                console.log("class deatisl; present");
              result={success:true,message:"class Details exist",status:200}
            }
            else{
              
                let resp = await ClassDetails.find({}).then((res)=>res)
                if(resp.length>0){
                    let id = 0
                    resp.map(d=>{
                        id=d.classDetailId
                    })
                     id++  
                        const res = new ClassDetails({
                            sessionId:req.body.sessionId,
                            branchid:req.body.branchId,
                            groupid:req.body.groupId,
                            classDetailId:id,
                            ClassId:req.body.Class,
                            SectionId:req.body.Section,
                            SubjectId:req.body.Subject,
                            TeacherId:req.body.Teacher,
                            RoomNo:req.body.RoomNo,
                            feeDetails:req.body.feeDetails
                        });
                    res.save();
                    
                    status=true
                    }
                    else{
                        const res = new ClassDetails({
                            sessionId:req.body.sessionId,
                            branchid:req.body.branchId,
                            groupid:req.body.groupId,
                            classDetailId:1,
                            ClassId:req.body.Class,
                            SectionId:req.body.Section,
                            SubjectId:req.body.Subject,
                            TeacherId:req.body.Teacher,
                            RoomNo:req.body.RoomNo,
                            feeDetails:req.body.feeDetails
                        });
    
    
                    res.save();
                   
                        status=true
                    }

            }
        })
           
        }
        else{
         result= {success:false,message:" pls insert Data",status:200}
        }
        if(status){
            result={success:true,message:" create  successfully",status:200}
        }
       
        
    res.json(result)
}


const getClassDetailApi = async(req,res,next)=>{
    let result=""
    let classinfo=[]
    let resp =await ClassDetails.find({branchid:req.body.branchid}).then((res)=>res)
    if(resp.length>0){
    let employee = await AddEmployee.find().then((res)=>res)
    let class1 = await Class.find().then((res)=>res)
    let section1 = await addSections.find().then((res)=>res)
     resp.map(async(d)=>{
       employee.map(dd=>{
            if(d.TeacherId==dd.employeeId){
                classinfo.push({...d._doc,employeename:dd.firstName +" "+ dd.lastName})
           }
       })
    })
console.log(classinfo);
let dataclass=[]
  classinfo.map(d=>{
    class1.map(dd=>{
        if(d.ClassId==dd.classId){
            dataclass.push({...d,employeename:d. employeename,Class:dd.Class})
       }

    })
  })

  console.log(classinfo);
 let sec1 =[]
  dataclass.map(d=>{
    section1.map(s=>{
        if(s.sectionId==d.SectionId){
            sec1.push({...d,SectionName:s.SectionName})  
        }
    })
  })

 
     result={success:true,message:" get successfully",status:200,data:sec1}
}
else{
    result={success:false,message:" not  get",status:200,data:resp}  
} 

res.json(result)
}



const getClassDetailApiByclass= async(req,res,next)=>{
    let result=""
   
    let resp = await ClassDetails.find({branchid:req.body.branchid,ClassId:req.body.classid}).then((res)=>res)
   console.log("data head",resp);
    if(resp.length>0){
        result={success:true,message:"  get successfully",status:200,data:resp}
    }
    else{
        result={success:false,message:"   not  get",status:200,data:resp}  
    }
     res.json( result)
}

const subjectHeadApi=async(req,res)=>{
    let result=""
    let status= false
  
    if(req.body.Class!==""){
            let resp = await SubjectHead.find({}).then((res)=>res)
            if(resp.length>0){
                let id = 0
                resp.map(d=>{
                    id=d.subjectHeadId
                })
                 id++  
                    const res = new SubjectHead({
                        branchId:req.body.branchid,
                        groupId:req.body.branchid,
                        subjectHeadId:id,
                        SubjectHead:req.body.SubjectHead,
                        Display:req.body.Display
                   
                    });
                res.save();
                status=true
                }
                else{
                    const res = new SubjectHead({
                       
                        branchId:req.body.branchid,
                        groupId:req.body.branchid,
                        subjectHeadId:1,
                        SubjectHead:req.body.SubjectHead,
                        Display:req.body.Display
                    });
                res.save();
                
                    status=true
                }
        }
        else{
         result= {success:false,message:" pls insert Data",status:200}
        }
        if(status){
            result={success:true,message:"  create  successfully",status:200}
        }
        else{
            result={success:false,message:"  not create",status:200}  
        }
        res.json( result)
}
const  getAllsubjectHeadApi=async(req,res)=>{
     let resp = await SubjectHead.find({}).then((res)=>res)
    if(resp.length>0){
        result={success:true,message:"  get successfully",status:200,data:resp}
    }
    else{
        result={success:false,message:"   not  get",status:200,data:resp}  
    }
    res.json( result)
}
const getsubjectHeadApi=async(req,res)=>{
    let resp = await SubjectHead.find({branchId:req.body.branchid}).then((res)=>res)
    if(resp.length>0){
        result={success:true,message:"  get successfully",status:200,data:resp}
    }
    else{
        result={success:false,message:"   not  get",status:200,data:resp}  
    }    
    res.json( result)
}

const subjectApi=async(req,res)=>{
    let result=""
    let status= false
  
    if(req.body.Class!==""){
            let resp = await Subjects.find({}).then((res)=>res)
            if(resp.length>0){
                let id = 0
                resp.map(d=>{
                    id=d.subjectId
                })
                 id++  
                    const res = new Subjects({
                       
                        branchId:req.body.branchid,
                        groupId:req.body.groupid,
                        subjectId:id,
                        Subjects:req.body.Subjects,
                        SubjectCode:req.body.SubjectCode,
                        Display:req.body.Display
                    });
                res.save();
                status=true
                }
                else{
                    const res = new Subjects({
                       
                        branchId:req.body.branchid,
                        groupId:req.body.groupid,
                        subjectId:1,
                        Subjects:req.body.Subjects,
                        SubjectCode:req.body.SubjectCode,
                        Display:req.body.Display
                       
                    });
                res.save();
                
                    status=true
                }
        }
        else{
         result= {success:false,message:" pls insert Data",status:200}
        }
        if(status){
            result={success:true,message:"  create  successfully",status:200}
        }
        else{
            result={success:false,message:"  not create",status:200}  
        }
        res.json( result)
}

const getsubjectApi=async(req,res)=>{
    console.log(req.body);
    let resp = await Subjects.find({branchId:req.body.branchid}).then((res)=>res)
    if(resp.length>0){
        result={success:true,message:"  get successfully",status:200,data:resp}
    }
    else{
        result={success:false,message:"   not  get",status:200,data:resp}  
    }
    console.log(resp);
    res.json( result)
}



const getAllsubjectApi=async(req,res)=>{
    let resp = await Subjects.find({}).then((res)=>res)
    if(resp.length>0){
        result={success:true,message:"  get successfully",status:200,data:resp}
    }
    else{
        result={success:false,message:"   not  get",status:200,data:resp}  
    }
    res.json( result)
}


const subjecttoHeadApi=async(req,res)=>{
    let result=""
    let status= false
  console.log(req.body);
    if(req.body.Class!==""){
            let resp = await SubjectToHead.find({}).then((res)=>res)
            if(resp.length>0){
                let id = 0
                resp.map(d=>{
                    id=d.subjecttoHeadId
                })
                 id++  
                    const res = new SubjectToHead({
                       
                        branchId:req.body.branchid,
                        groupId:req.body.groupid,
                        subjecttoHeadId:id,
                        SubjectHead:req.body.SubjectHead,
                        Subjects:req.body.Subjects


                    });
                res.save();
                status=true
                }
                else{
                    const res = new SubjectToHead({
                       
                        branchId:req.body.branchid,
                        groupId:req.body.groupid,
                        subjecttoHeadId:1,
                        SubjectHead:req.body.SubjectHead,
                        Subjects:req.body.Subjects

                    });
                res.save();
                
                    status=true
                }
        }
        else{
         result= {success:false,message:" pls insert Data",status:200}
        }
        if(status){
            result={success:true,message:"  create  successfully",status:200}
        }
        else{
            result={success:false,message:"  not create",status:200}  
        }
    
        res.json( result)
}
const getAllsubjecttoHeadApi=async(req,res)=>{
    let resp = await SubjectToHead.find({}).then((res)=>res)
    if(resp.length>0){
        result={success:true,message:"  get successfully",status:200,data:resp}
    }
    else{
        result={success:false,message:"   not  get",status:200,data:resp}  
    }
    res.json( result)
}
const getsubjectheadtosubjectApi=async(req,res)=>{
   
    let resp = await SubjectToHead.find({ branchId:req.body.branchid, subjecttoHeadId:req.body.subjectheadid}).then((res)=>res)
    if(resp.length>0){
        result={success:true,message:"  get successfully",status:200,data:resp}
    }
    else{
        result={success:false,message:"   not  get",status:200,data:resp}  
    }
    res.json( result)
}

const getsubjecttoHeadApi=async(req,res)=>{
    console.log(req.body);
    let resp = await SubjectToHead.find({branchId:req.body.branchid}).then((res)=>res)
    let resp1 = await SubjectHead.find({branchId:req.body.branchid}).then((res)=>res)
    console.log(resp);
    console.log(resp1);
let data = []
    resp.map(d1=>{
        resp1.filter(d=>{
            if(d1.SubjectHead==d.subjectHeadId){
               data.push({...d1,"SubjectHeadName":d.SubjectHead})
            }
        })
    })


   console.log("data api = >>",data); 
    if(resp.length>0){
        result={success:true,message:"  get successfully",status:200,data:data}
    }
    else{
        result={success:false,message:"   not  get",status:200,data:data  }
    }

    res.json( result)
}



module.exports={
    feeHeadApi,
    getfeeHeadsApi,
    getAllfeeHeadsApi,
    sessionApi,
    getSessionApi,
    sessionControlApi,
    classApi,
    getClassApi,
    getSectionApi,
    SectionApi ,
    getClassDetailApi,
    ClassDetailApi,
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
getsubjectheadtosubjectApi
}