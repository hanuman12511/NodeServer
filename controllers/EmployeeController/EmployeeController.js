const AddEmployee = require("../../models/Employee/AddEmployee")


const LoginData=async(data,employeeid)=>{
    console.log("dataemployee login employeeid=>>",employeeid);
    console.log("dataemployee login data=>>",data);
    let params={
     
        employeeId:employeeid,
        groupId:data.groupId,
        branchId:data.branchId,
        mobile:data.mobile,
        email:data.email,
        password:data.passord?data.passord:"",
        otp:1111,
        status:"employee"
    }

    let info ={};
    info.method = 'POST';
    info.headers= {
        'Content-Type': 'application/json',
      }
    info.body=JSON.stringify(params)
    let url= "http://localhost:4000/loginAppApi"
await fetch(url,info)
.then(response => response.json())
.then(data => {
console.log("data loging after ",data);
})

}

const employeeApi= async(req,res,next)=>{
    let result=""
                let status= false
                if(req.body.firstname!==""){

            await  AddEmployee.find({ mobile:req.body.mobile}).then(async(res)=>{
                console.log("mobile=>",res.length);
                    if(res.length==0){
                        
                        let resp = await  AddEmployee.find({}).then((res)=>res)
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
                                    departmentName:req.body.departmentName,
                                    firstName:req.body.firstName,
                                    lastName:req.body.lastName,
                                     fatherName:req.body.fatherName,
                                    motherName:req.body.motherName,
                                    email:req.body.email,
                                   dob:req.body.dob,
                                     gender:req.body.gender,
                                    mobile:req.body.mobile,
                                     maritialstatus:req.body.maritialstatus,
                                     address:req.body.address,
                                   area:req.body.area,
                                    pin:req.body.pin,
                                    city:req.body.city,
                                    state:req.body.state,
                                     country:req.body.country,
                                     paddress:req.body.paddress,
                                   parea:req.body.parea,
                                     ppin:req.body.ppin,
                                    pcity:req.body.pcity,
                                    pstate:req.body.pstate,
                                     status:"employee",
                                     otp:"0000",
                                     idproofdrop:req.body.idproofdrop,
                                idproof:req.body.idproof,
                                addressidproof:req.body.addressidproof,
                                addressidproofdrop:req.body.addressidproofdrop,
                                qualification:req.body.qualification,
                                experience:req.body.experience,
                                referece:req.body.referece,
                                bankname:req.body.bankname,
                                bankacno:req.body.bankacno,
                                bankifsc:req.body.bankifsc,
                                bankaddress:req.body.bankaddress,
                                joindate:req.body.joindate,
                                salary:req.body.salary,
                                periods:req.body.periods,
                                paidleave:req.body.paidleave,
                                   
                                    
                                });
                            res.save();
                            status=true
                            result={success:true,message:"  create  successfully",status:200}
                            LoginData(req.body,id)
                            }
                            else{
                                const res = new AddEmployee({

                                    branchId:req.body.branchId,
                                    groupId:req.body.groupId,
                                    sessionId:req.body.sessionId,
                                    employeeId:1,
                                    departmentName:req.body.departmentName,
                                    firstName:req.body.firstName,
                                    lastName:req.body.lastName,
                                     fatherName:req.body.fatherName,
                                    motherName:req.body.motherName,
                                    email:req.body.email,
                                   dob:req.body.dob,
                                     gender:req.body.gender,
                                    mobile:req.body.mobile,
                                     maritialstatus:req.body.maritialstatus,
                                     address:req.body.address,
                                   area:req.body.area,
                                    pin:req.body.pin,
                                    city:req.body.city,
                                    state:req.body.state,
                                     country:req.body.country,
                                     paddress:req.body.paddress,
                                   parea:req.body.parea,
                                     ppin:req.body.ppin,
                                    pcity:req.body.pcity,
                                    pstate:req.body.pstate,
                                     status:"employee",
                                     otp:"0000",
                                     idproofdrop:req.body.idproofdrop,
                                idproof:req.body.idproof,
                                addressidproof:req.body.addressidproof,
                                addressidproofdrop:req.body.addressidproofdrop,
                                qualification:req.body.qualification,
                                experience:req.body.experience,
                                referece:req.body.referece,
                                bankname:req.body.bankname,
                                bankacno:req.body.bankacno,
                                bankifsc:req.body.bankifsc,
                                bankaddress:req.body.bankaddress,
                                joindate:req.body.joindate,
                                salary:req.body.salary,
                                periods:req.body.periods,
                                paidleave:req.body.paidleave,
                                   
                                });
                                res.save();
                            
                                status=true
                                result={success:true,message:"  create  successfully",status:200}
                                LoginData(req.body,1)
                            }
                        }else{
                            result= {success:false,message:"Mobile allready exits",status:200}
                        }
                    })
                      
                    }
                    else{
                     result= {success:false,message:" pls insert Data",status:200}
                    }
                   /*  if(status){
                        result={success:true,message:"  create  successfully",status:200}
                    }
                    else{
                        result={success:false,message:"not create",status:200}  
                    } */
          
        res.json( result)
    }
    
const  getEmployeeByIdApi = async(req,res,next)=>{
       let resp = await AddEmployee.find({employeeId:req.body.employeeId}).then((res)=>res)
        if(resp.length>0){
        result={success:true,message:"  get successfully",status:200,data:resp}
    }
    else{
        result={success:false,message:"   not  get",status:200,data:resp}  
    }
    res.json(result)
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
        getEmployeeApi,
        getEmployeeByIdApi,
        
}