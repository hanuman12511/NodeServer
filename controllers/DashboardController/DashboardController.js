
const AddEmployee = require("../../models/Employee/AddEmployee");




const  getEmployeeAmountApi = async(req,res,next)=>{
    let resp = await AddEmployee.find({branchId:req.body.branchid}).then((res)=>res)
    
    if(resp.length>0){
        let data=0    
        resp.map(d=>{
            data+=parseInt(d.salary)
            })
        result={success:true,message:"  get successfully",status:200,data:data}
    }
    else{
        result={success:false,message:"   not  get",status:200,data:resp}  
    }
    res.json(result)
  }
  
  

module.exports = {
    getEmployeeAmountApi
    
}