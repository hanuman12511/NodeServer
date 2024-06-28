const AddEmployee = require("../../models/Employee/AddEmployee")

const employeeApi= async(req,res,next)=>{
    let result=""
                let status= false
                if(req.body.firstname!==""){
                        let resp = await AddEmployee.find({}).then((res)=>res)
                        if(resp.length>0){
                            let id = 0
                            resp.map(d=>{
                                id=d.employeeId
                            })
                             id++  
                                const res = new AddEmployee({
                                    branchId:req.body.branchId,
                                    groupId:req.body.groupId,
                                    sessionId:req.body.sessionId,
                                    employeeId:id,
                                    employeeName:req.body.employeeName,
                                    Subject:req.body.Subject,
                                    Display:req.body.Display
                                   
                                    
                                });
                            res.save();
                            status=true
                            }
                            else{
                                const res = new AddEmployee({
                                    branchId:req.body.branchId,
                                    groupId:req.body.groupId,
                                    sessionId:req.body.sessionId,
                                    employeeId:1,
                                    employeeName:req.body.employeeName,
                                    Subject:req.body.Subject,
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
                        result={success:false,message:"not create",status:200}  
                    }
          
        res.json( result)
    }
    
    const  getEmployeeApi = async(req,res,next)=>{
       
        let resp = await AddEmployee.find({branchId:req.body.branchid}).then((res)=>res)
       
    if(resp.length>0){
        result={success:true,message:"  get successfully",status:200,data:resp}
    }
    else{
        result={success:false,message:"   not  get",status:200,data:resp}  
    }
    
    res.json(result)
    }
    
    module.exports={
        employeeApi,
        getEmployeeApi
    }