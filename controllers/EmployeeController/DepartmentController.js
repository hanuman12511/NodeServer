const Departments = require("../../models/Departments")

const departmentsApi= async(req,res,next)=>{
    let result=""
                let status= false
                if(req.body.Department!==""){
                   await Departments.find({ Department:req.body.Department,}).then(async(res)=>{
                        console.log(" Department=>",res.length);
                        if(res.length==0){
                            let resp = await Departments.find({}).then((res)=>res)
                            if(resp.length>0){
                                let id = 0
                                resp.map(d=>{
                                    id=d.Departmentid
                                })
                                 id++  
                                    const res = new Departments({
                                        
                                        Departmentid:id,
                                        Department:req.body.Department,
                                        Display:req.body.Display,
                                        branchid:req.body.branchid,
                                        groupid:req.body.groupid,
                                        branchControl:true
                                        
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
                                    const res = new Departments({
                                        
                                        Departmentid:1,
                                        Department:req.body.Department,
                                        Display:req.body.Display,
                                        branchid:req.body.branchid,
                                        groupid:req.body.groupid,
                                        branchControl:true
                                        
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
    
const  getDepartmentApi = async(req,res,next)=>{
    let resp = await Departments.find({branchid:req.body.branchid}).then((res)=>res)
    if(resp.length>0){
        result={success:true,message:"  get successfully",status:200,data:resp}
    }
    else{
        result={success:false,message:"   not  get",status:200,data:resp}  
    }
    res.json(result)
}
    


const getDepartmentControlApi = async(req,res,next)=>{

    let result=""
    let status= false
    console.log("data=>>",req.file);
    console.log("data=>>",req.body);
    if(true){
          
            let resp =  await Departments.updateOne( 
                { branchId:req.body. branchId, Departmentid:req.body. Departmentid,}, 
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




const getDepartmentUpdateApi = async(req,res,next)=>{
    let result=""
    let status= false
    let resp1= await Departments.find({ Departmentid:req.body.Departmentid}).then((res)=>res)
    console.log(Object.keys(resp1).length);
    if(Object.keys(resp1).length>=0){
    
          
           await Departments.updateOne({ branchid:req.body.branchid,  Departmentid:req.body.Departmentid,groupid:req.body.groupid}, 
                {
                  $set: 
                     {
                       
                        Department:req.body.Department,
                        Display:req.body.Display,
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
                   
         }
        else{
         result= {success:false,message:" pls change Data",status:200}
        }
        
        
    res.json(result)  
}



module.exports={
    getDepartmentApi,
    getDepartmentControlApi,
    getDepartmentUpdateApi,
    departmentsApi
}