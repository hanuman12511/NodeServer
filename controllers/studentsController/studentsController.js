const Student = require("../../models/Student") 
const StudentFee = require("../../models/StudentFee") 
  
const studentsFeeApi= async(req,res,next)=>{
let result=""
            let status= false
            if(req.body.firstname!==""){
                    let resp = await studentsFee.find({}).then((res)=>res)
                    if(resp.length>0){
                        let id = 0
                        resp.map(d=>{
                            id=d.feeId
                        })
                         id++  
                            const res = new studentsFee({
                                feeId:id,
                                studentId:req.body.studentId,
                                classDetailId:req.body.classDetailId,
                                Deposited:req.body.Deposited,
                                Rebat:req.body.Rebat,
                                Due:req.body.Due,
                                NextDate:req.body.NextDate,
                                RecDate:req.body.RecDate,
                               
                                
                            });
                        res.save();
                        status=true
                        }
                        else{
                            const res = new studentsFee({
                                feeId:1,
                                studentId:req.body.studentId,
                                classDetailId:req.body.classDetailId,
                                Deposited:req.body.Deposited,
                                Rebat:req.body.Rebat,
                                Due:req.body.Due,
                                NextDate:req.body.NextDate,
                                RecDate:req.body.RecDate,
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
      
    res.json(resp)
}

const  getstudentsFeeApi = async(req,res,next)=>{
   
    let resp = await studentsFee.find({}).then((res)=>res)
   
if(resp.length>0){
    result={success:true,message:"  get successfully",status:200,data:resp}
}
else{
    result={success:false,message:"   not  get",status:200,data:resp}  
}

res.json(result)
}


const studentLogin= async(req,res,next)=>{
    console.log(req.body);
   
    let resp = await Student.find({dob:req.body.dob,mobile:req.body.mobile}).then((res)=>res)
   console.log("data=>>",resp);
    if(resp.length>0){
        result={success:true,message:"  get successfully",status:200,data:resp}
    }
    else{
        result={success:false,message:"   not  get",status:200,data:resp}  
    }
    res.json( result)
}







const displayStudentsClassBy= async(req,res,next)=>{
   

    let resp = await Student.find({classsection:req.body.classid}).then((res)=>res)
   
    if(resp.length>0){
        result={success:true,message:"  get successfully",status:200,data:resp}
    }
    else{
        result={success:false,message:"   not  get",status:200,data:resp}  
    }
    


    res.json( result)
}



const studentAttendance= async(req,res,next)=>{

    res.json("students attendanceinfo")
}



 
const studentsApi = async(req,res,next)=>{
    let result=""
    let status= false
    if(req.body.firstname!==""){
            let resp = await Student.find({}).then((res)=>res)
            if(resp.length>0){
                let id = 0
                resp.map(d=>{
                    id=d.studentid
                })
                 id++  
                    const res = new Student({
                        
                        studentid:id,
    firstname:req.body.firstname,
    lastname:req.body.lastname,
     fathername:req.body.fathername,
     mothername:req.body.mothername,
    email:req.body.email,
     dob:req.body.dob,
     gender:req.body.gender,
     physical:req.body.physical,
     category:req.body.category,
     password:req.body.password,
     mobile:req.body.mobile,
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
     pcountry:req.body.pcountry,
    previousschoolname:req.body.previousschoolname,
      srno:req.body.srno,
      previousclassname:req.body.previousclassname,
      registerpageno:req.body.registerpageno,
      registrationenrollno:req.body.registrationenrollno,
      classsection:req.body.classsection,
       admissiondate:req.body.admissiondate,
      root:req.body.root,
      stand:req.body.stand,
      fare:req.body.fare,
      status:req.body.status,
      otp:req.body.otp

                        
                    });
                res.save();
                status=true
                }
                else{
                    const res = new Student({
                        studentid:1,
                        firstname:req.body.firstname,
                        lastname:req.body.lastname,
                         fathername:req.body.fathername,
                         mothername:req.body.mothername,
                        email:req.body.email,
                         dob:req.body.dob,
                         gender:req.body.gender,
                         physical:req.body.physical,
                         category:req.body.category,
                         password:req.body.password,
                         mobile:req.body.mobile,
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
                         pcountry:req.body.pcountry,
                        previousschoolname:req.body.previousschoolname,
                          srno:req.body.srno,
                          previousclassname:req.body.previousclassname,
                          registerpageno:req.body.registerpageno,
                          registrationenrollno:req.body.registrationenrollno,
                          classsection:req.body.classsection,
                           admissiondate:req.body.admissiondate,
                          root:req.body.root,
                          stand:req.body.stand,
                          fare:req.body.fare,
                          status:req.body.status,
                    
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
        
    res.json(result)
}

const  getStudentsApi = async(req,res,next)=>{

   
    let resp = await Student.find({}).then((res)=>res)
   
if(resp.length>0){
    result={success:true,message:"  get successfully",status:200,data:resp}
}
else{
    result={success:false,message:"   not  get",status:200,data:resp}  
}

res.json(result)
}


module.exports={
    studentsApi,
    getStudentsApi,
    displayStudentsClassBy,
    studentAttendance,
    studentsFeeApi,
    getstudentsFeeApi,
    studentLogin
}
