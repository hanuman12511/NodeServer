const officeWork = require("../../models/Employee/officeWork")

const officeworkApi= async(req,res,next)=>{
    let result=""
                let status= false
                if(req.body.date!==""){
                   await officeWork.find({ employeeId:req.body.employeeId,}).then(async(res)=>{
                        console.log("EmployeeAttandence=>",res.length);
                        if(res.length==0){
                            let resp = await officeWork.find({}).then((res)=>res)
                            if(resp.length>0){
                                let id = 0
                                resp.map(d=>{
                                    id=d.oficeworkId
                                })
                                 id++  
                                    const res = new officeWork({
                                        oficeworkId:id,
                                        employeeId:req.body.employeeId,
                                        branchid:req.body.branchid,
                                        groupid:req.body.groupid,
                                        sessionid:req.body.sessionid,
                                        deparmentId:req.body.deparmentId,
                                        intime:req.body.intime,
                                        outtime:req.body.outtime,
                                        
                                    });
                                res.save();
                              
                                if(Object.keys(res).length>0){
                                    result={success:true,message:"  create  successfully",status:200}
                                }
                                else{
                                    result={success:false,message:"not create",status:200}  
                                }
                                }
                                else{
                                    const res = new officeWork({
                                        oficeworkId:1,
                                        employeeId:req.body.employeeId,
                                        branchid:req.body.branchid,
                                        groupid:req.body.groupid,
                                        sessionid:req.body.sessionid,
                                        deparmentId:req.body.deparmentId,
                                        intime:req.body.intime,
                                        outtime:req.body.outtime,
                                        
                                    });
                                res.save();
                               
                                if(Object.keys(res).length>0){
                                    result={success:true,message:"  create  successfully",status:200}
                                }
                                else{
                                    result={success:false,message:"not create",status:200}  
                                }
                            }
                        }
                        else{
                            result={success:false,message:"department already exits",status:200}
                        }
                         })
                        
                         }
                    else{
                     result= {success:false,message:" pls insert Data",status:200}
                    }
                 
        res.json( result)
    }


    
const  getofficeWorkceApi = async(req,res,next)=>{
    let resp = await officeWork.find({branchid:req.body.branchid}).then((res)=>res)
    if(resp.length>0){
        result={success:true,message:"get successfully",status:200,data:resp}
    }
    else{
        result={success:false,message:"not  get",status:200,data:resp}  
    }
    res.json(result)
}
const getofficeWorkUpdateApi = async(req,res,next)=>{
    let result=""
    let status= false
        await officeWork.updateOne({ branchid:req.body.branchid, oficeworkIdId:req.body.oficeworkIdId,groupid:req.body.groupid,sessionid:req.body.sessionid}, 
                {
                  $set: 
                     {
                       
                        intime:req.body.intime,
                        outtime:req.body.outtime
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
    officeworkApi,
    getofficeWorkceApi,
    getofficeWorkUpdateApi,
}