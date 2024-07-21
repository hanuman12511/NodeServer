const AddEmployee = require("../../models/Employee/AddEmployee")



const employeeApi= async(req,res,next)=>{
    let result=""
                let status= false
                if(req.body.firstname!==""){

            await  AddEmployee.find({ mobile:req.body.mobile}).then(async(res)=>{
                console.log("mobile=>",res.length);
                    if(res.length==0){
                        
                        let resp = await  AddEmployee.find({branchId:req.body.branchid}).then((res)=>res)
                        if(resp.length>0){
                           let id = 0
                            resp.map(d=>{
                                id=d.employeeId
                            })
                             id++  
                                const res = new AddEmployee({
                                  intime:req.body.intime,
                                  outtime:req.body.outtime,
                                    branchId:req.body.branchid,
                                    groupId:req.body.groupid,
                                    sessionId:req.body.sessionid,
                                    employeeId:id,
                                    departmentName:req.body.department,
                                    firstName:req.body.firstname,
                                    lastName:req.body.lastname,
                                     fatherName:req.body.fathername,
                                    motherName:req.body.mothername,
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
                          
                         
                            }
                            else{
                                const res = new AddEmployee({

                                    intime:req.body.intime,
                                    outtime:req.body.outtime,
                                    branchId:req.body.branchid,
                                    groupId:req.body.groupid,
                                    sessionId:req.body.sessionid,
                                    employeeId:1,
                                    departmentName:req.body.department,
                                    firstName:req.body.firstname,
                                    lastName:req.body.lastname,
                                     fatherName:req.body.fathername,
                                    motherName:req.body.mothername,
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





const getemployeeUpdateApi = async(req,res,next)=>{
    let result=""
    let status= false
    console.log(req.body);
     await AddEmployee.updateOne({  branchId:req.body.branchid,  employeeId:req.body.employeeId,groupId:req.body.groupid}, 
                {
                  $set: 
                     {
                     
                      intime:req.body.intime,
                      outtime:req.body.outtime,
                      branchId:req.body.branchid,
                      groupId:req.body.groupid,
                      sessionId:req.body.sessionid,
                    
                      departmentName:req.body.department,
                      firstName:req.body.firstname,
                      lastName:req.body.lastname,
                       fatherName:req.body.fathername,
                      motherName:req.body.mothername,
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
                        }
                }, 
                { upsert: true }
              ).then((res)=>res).then((data)=>{
                console.log("employee",data);
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
        employeeApi,
        getEmployeeApi,
        getemployeeUpdateApi
        
}