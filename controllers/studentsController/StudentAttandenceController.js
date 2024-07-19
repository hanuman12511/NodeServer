const Class = require("../../models/Class")
const CLass = require("../../models/Class")
const Student = require("../../models/Student")
const studentAttandence = require("../../models/Students/studentAttendence")

const attandenceApi= async(req,res,next)=>{

  
    let result=""
            let status= false
                if(req.body.date!==""){
                   await studentAttandence.find({ date:req.body.date,branchId:req.body.branchid}).then(async(res)=>{
                        if(res.length>0){
                             result={success:false,message:"date exites",status:200}  
                                  }
                                else{
                                    const res = new studentAttandence({
                                        branchId:req.body.branchid,
                                        date:req.body.date,
                                        data:req.body.data
                                        
                                    });
                                res.save();
                                result={success:true,message:"  create  successfully",status:200}
                                }
                            })
                        }
                            else{
                                result={success:false,message:" ple date add",status:200}
                            }
                 
        res.json( result)
    }

        
const  getAttandenceApi = async(req,res,next)=>{
    await studentAttandence.find({branchId:req.body.branchid}).then((res)=>res)
    await studentAttandence.find({branchId:req.body.branchid,date:req.body.date}).then((res)=>{
        if(res.length>0){
            result={success:true,message:"get successfully",status:200,data:res}
        }
        else{
            result={success:false,message:"not  get",status:200,data:res}  
        }    
        
    })
res.json(result)
}


const  AddAttandenceApi = async(req,res,next)=>{
    console.log("get api data 1=>>",req.body);
    await studentAttandence.insertMany(req.body).then((res)=>{
        console.log("multy",res);
    })
    res.json("result")
}

const  getAttandenceBranchbyApi = async(req,res,next)=>{
    let datar=[]
   
    let resp=await studentAttandence.find({branchId:req.body.branchid,date:req.body.date}).then((res)=>res)
    let res1 = await Student.find({branchId:req.body.branchid}).then((res)=>res)
    if(resp.length>0){
   
    let datar1=resp.map(d=>{
        let data1=[]
        if(req.body.date==d.date){
          return  d.data.map(dd=>{
                return {...dd}
            })
            

        }
       
    })
  
   
 datar=datar1[0]
   
}
else{

  /*  let dept= await Departments.find().then((res)=>res) */
    
  let resp = await Class.find({branchid:req.body.branchid}).then((res)=>res) 
    console.log("android=>>",resp);
   /*  console.log(res1); */
datar=res1.map(d=>{
 console.log(d);
 let classname=""
 resp.map(classdaat=>{
        if(d.ClassSection==classdaat.classId){
            classname=classdaat.Class
        }
 })
    return{Class:classname,studentsId:d.studentsId,firstName:d.FirstName,lastName:d.LastName, fatherName:d.FName, isChecked: false, intime: "--:--", outtime: "--:--", isInTime: false, isOutTime: false,ontime:"08:00",offtime:"02:00"}
})
}
     if(resp.length>0){
        result={success:true,message:"get successfully",status:200,data:datar}
    }
    else{
        result={success:false,message:"not  get",status:200,data:datar}  
    } 
    res.json(result)
}


const getAttandenceUpdateApi = async(req,res,next)=>{
    console.log(req.body);
    let result=""
    let status= false
        await studentAttandence.updateOne({ employeeId:req.body.employeeId,branchid:req.body.branchId,groupid:req.body.groupId}, 
                {
                  $set: 
                     {
                       
                        date:req.body.date,
                        ontime:req.body.ontime,
                        offtime:req.body.offtime,
                        isChecked: req.body.isChecked,
                        intime:req.body.intime,
                        outtime:req.body.outtime,
                        isInTime:req.body.isInTime,
                        isOutTime:req.body.isOutTime
                        }
                }, 
                { upsert: true }
              ).then((res)=>res).then((data)=>{
                console.log(data);
                status=true
                if(data.modifiedCount>0){
                    result={success:true,message:" update successfully",status:200}
                }
                else{
                    result={success:false,message:" update not ",status:200}  
                }
              })
                   
        
    res.json(result)  
}



module.exports={
    attandenceApi,
    getAttandenceApi,
    getAttandenceUpdateApi,
    getAttandenceBranchbyApi,
    AddAttandenceApi
}