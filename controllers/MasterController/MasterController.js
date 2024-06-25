const FeeHeads = require("../../models/FeeHeads")   
const SessionHeads = require("../../models/addSession")   
const addClass = require("../../models/addClass")   
const addSection = require("../../models/addSections")   
const ClassDetails = require("../../models/ClassDetails")  
const addBranch = require("../../models/addBranch")
const addBranchApi = async(req,res) =>{
    let result=""
    let status= false
    if(req.body.name!=="" && req.body.groupId!==""){
            let resp = await addBranch.find({}).then((res)=>res)
            if(resp.length>0){
                let resp1 = await addBranch.find({mobile:req.body.mobile}).then((res)=>res)
                console.log("data get",resp1);
                if(resp1.length==0){
                let id = 0
                resp.map(d=>{
                    id=d.branchId
                })
                 id++  
        const res = new addBranch({
                        
                    branchId:id,
                    groupId:req.body.groupId,
                    name:req.body.name,
                    institutename:req.body.institutename,
                    affiliation:req.body.affiliation,
                    affiliated:req.body.affiliated,
                    medium:req.body.medium,
                    phone:req.body.phone,
                    email:req.body.email,
                    password:req.body.password,
                    mobile:req.body.mobile,
                    contactperson:req.body.contactperson,
                    Address:req.body.Address,
                    registerno:req.body.registerno,
                    established:req.body.established,
                    website:req.body.website,
                    logo:req.body.logo,
                    branchControl:req.body.branchControl,
                    status:"admin",
                                    
                    });
                res.save();
                status=true
                }
                else{
                    result={success:false,message:" pls change mobile number",status:200}   
                   return res.json(result)     
                }    
            }
                else{
                    const res = new addBranch({
                        
                        branchId:1,
                        groupId:req.body.groupId,
                        name:req.body.name,
                        institutename:req.body.institutename,
                        affiliation:req.body.affiliation,
                        affiliated:req.body.affiliated,
                        medium:req.body.medium,
                        phone:req.body.phone,
                        email:req.body.email,
                        password:req.body.password,
                        mobile:req.body.mobile,
                        contactperson:req.body.contactperson,
                        Address:req.body.Address,
                        registerno:req.body.registerno,
                        established:req.body.established,
                        website:req.body.website,
                        logo:req.body.logo,
                        branchControl:req.body.branchControl,
                        status:"admin",              
                        });
                    res.save();
                
                    status=true
                }
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


const getBranchGroupIdApi = async(req,res,next)=>{
    let resp = await addBranch.find({groupId:req.body.id}).then((res)=>res)
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
                        feeHeadId:id,
                        FeeHead:req.body.feeheadname,
                        FeeFrequency:req.body.feefrequency,
                    });
                res.save();
                status=true
                }
                else{
                    const res = new FeeHeads({
                        feeHeadId:1,
                        FeeHead:req.body.feeheadname,
                        FeeFrequency:req.body.feefrequency,
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
   
    let resp = await FeeHeads.find({}).then((res)=>res)
   
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
  
    if(req.body.SessionName!=="" && req.body.StartMonth!==""){
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
            result={success:false,message:"  session head not create",status:200}  
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


const getSessionByBranchIdApi = async(req,res,next)=>{
   
    let resp = await SessionHeads.find({ branchid:req.body.branchid}).then((res)=>res)
   
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
  
    if(req.body.CLassName!==""){
            let resp = await addClass.find({}).then((res)=>res)
            if(resp.length>0){
                let id = 0
                resp.map(d=>{
                    id=d.classId
                })
                 id++  
                    const res = new addClass({
                       
                        classId:id,
                        ClassName:req.body.CLassName,
                                            });
                res.save();
                status=true
                }
                else{
                    const res = new addClass({
                       
                        classId:1,
                        ClassName:req.body.CLassName,
                    });
                res.save();
                
                    status=true
                }
        }
        else{
         result= {success:false,message:" pls insert Data",status:200}
        }
        if(status){
            result={success:true,message:"  class head create  successfully",status:200}
        }
        else{
            result={success:false,message:"  class head not create",status:200}  
        }
        
    res.json(result)
}

const getClassApi = async(req,res,next)=>{
   
    let resp = await addClass.find({}).then((res)=>res)
   
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
    let resp = await addClass.find({classId:classid}).then((res)=>res)
   
if(resp.length>0){
    result={success:true,message:"   get class successfully",status:200,data:resp}
}
else{
    result={success:false,message:"    not  get classs",status:200,data:resp}  
}

res.json(result)
}





const SectionApi = async(req,res,next)=>{
    let result=""
    let status= false
  
    if(req.body.CLassName!==""){
            let resp = await addSection.find({}).then((res)=>res)
            if(resp.length>0){
                let id = 0
                resp.map(d=>{
                    id=d.sectionId
                })
                 id++  
                    const res = new addSection({
                       
                        sectionId:id,
                        SectionName:req.body.SectionName
                    });
                res.save();
                status=true
                }
                else{
                    const res = new addSection({
                       
                        sectionId:1,
                        SectionName:req.body.SectionName
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
        
    res.json(result)
}


const getSectionApi = async(req,res,next)=>{
   
    let resp = await addSection.find({}).then((res)=>res)
   
if(resp.length>0){
    result={success:true,message:" addSection get successfully",status:200,data:resp}
}
else{
    result={success:false,message:"  addSection not  get",status:200,data:resp}  
}

res.json(result)
}



const ClassDetailApi = async(req,res,next)=>{
    let result=""
    let status= false
  
    if(req.body.Class!==""){
            let resp = await ClassDetails.find({}).then((res)=>res)
            if(resp.length>0){
                let id = 0
                resp.map(d=>{
                    id=d.classDetailId
                })
                 id++  
                    const res = new ClassDetails({
                       
                     classDetailId:id,
                       Class:req.body.Class,
                        Section:req.body.Section,
                        Subject:req.body.Subject,
                        Teacher:req.body.Teacher,
                        RoomNo:req.body.RoomNo,
                        TuitionFee:req.body.TuitionFee,
                        AdmissionFee:req.body.AdmissionFee,
                    });
                res.save();
                status=true
                }
                else{
                    const res = new ClassDetails({
                       
                        classDetailId:1,
                        Class:req.body.Class,
                         Section:req.body.Section,
                         Subject:req.body.Subject,
                         Teacher:req.body.Teacher,
                         RoomNo:req.body.RoomNo,
                         TuitionFee:req.body.TuitionFee,
                         AdmissionFee:req.body.AdmissionFee,
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
        
    res.json(result)
}


const getClassDetailApi = async(req,res,next)=>{
   
    let resp = await ClassDetails.find({}).then((res)=>res)
   
if(resp.length>0){
    result={success:true,message:" get successfully",status:200,data:resp}
}
else{
    result={success:false,message:" not  get",status:200,data:resp}  
}

res.json(result)
}



const getClassDetailApiByclass= async(req,res,next)=>{
   

    let resp = await ClassDetails.find({Class:req.body.Class}).then((res)=>res)
   
    if(resp.length>0){
        result={success:true,message:"  get successfully",status:200,data:resp}
    }
    else{
        result={success:false,message:"   not  get",status:200,data:resp}  
    }
    


    res.json( result)
}





module.exports={
    feeHeadApi,
    sessionApi,
    getSessionApi,
    getfeeHeadsApi,
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
    getSessionByBranchIdApi
}