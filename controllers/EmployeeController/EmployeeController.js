const Departments = require("../../models/Departments")
const AddEmployee = require("../../models/Employee/AddEmployee")


const multer = require('multer')
const path = require('path');
var ext = ""
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Uploads is the Upload_folder_name
        cb(null, "public/uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + "-"+file.originalname);
    },
});

// Define the maximum size for uploading
// picture i.e. 1 MB. it is optional
const maxSize = 1 * 1000 * 1000;

var upload = multer({
    storage: storage,
    limits: { fileSize: maxSize },
    fileFilter: function (req, file, cb) {
        // Set the filetypes, it is optional
        var filetypes = /jpeg|jpg|png|pdf|doc|xlsx/;
        var mimetype = filetypes.test(file.mimetype);

        var extname = filetypes.test(
            path.extname(file.originalname).toLowerCase()
        );
        ext = extname
        if (mimetype && extname) {
            return cb(null, true);
        }

        cb(
            "Error: File upload only supports the " +
            "following filetypes - " +
            filetypes
        );
    },

    // mypic is the name of file attribute
}).single("file");



const employeewithimageApi = async (req, res, next) => {
  upload(req, res, async function (err) {
      if (err) {
          res.send(err);
      } else {
          let result = ""
          let status1 = false
          console.log("ontis", req?.body)
          console.log("ontis file", req?.file)
          console.log("ontis",JSON.parse(req?.body?.params)) 
        const{ 
          department,
          firstname,
          lastname,
          fathername,
          mothername,
          email,
          dob,
          gender,
          mobile,
          maritialstatus,
          address,
          area,
          pin,
          city,
          state,
          country,
          paddress,
          parea,
          ppin,
          pcity,
          pstate,
          branchid,
          groupid,
          idproofdrop,
          idproof,
          addressidproof,
          addressidproofdrop,
          qualification,
          experience,
          referece,
          bankname,
          bankacno,
          bankifsc,
          bankaddress,
          joindate,
          salary,
          periods,
          paidleave,
          intime,
          outtime}=JSON.parse(req?.body?.params)
 if (firstname !== "") {
     
          let resp = await AddEmployee.find({branchId:branchid}).then((res) => res)
      if (resp.length > 0) {
          let id = 0
          resp.map(d => {
              id = d.employeeId
          })
          id++
          try{
          const res = new AddEmployee({
            intime:intime,
            outtime:outtime,
              branchId:branchid,
              groupId:groupid,
             
              employeeId:id,
              departmentName:department,
              firstName:firstname,
              lastName:lastname,
               fatherName:fathername,
              motherName:mothername,
              email:email,
             dob:dob,
               gender:gender,
              mobile:mobile,
               maritialstatus:maritialstatus,
               address:address,
             area:area,
              pin:pin,
              city:city,
              state:state,
               country:country,
               paddress:paddress,
             parea:parea,
               ppin:ppin,
              pcity:pcity,
              pstate:pstate,
              
               idproofdrop:idproofdrop,
          idproof:idproof,
          addressidproof:addressidproof,
          addressidproofdrop:addressidproofdrop,
          qualification:qualification,
          experience:experience,
          referece:referece,
          bankname:bankname,
          bankacno:bankacno,
          bankifsc:bankifsc,
          bankaddress:bankaddress,
          joindate:joindate,
          salary:salary,
          periods:periods,
          paidleave:paidleave,
          image: req.file==undefined?"":req.file.filename,
          })
          res.save();
          
          result = { success: true, message: "  create  successfully", status: 200 }
      }catch(error){
              console.log(error);
      }
      }
      else {
          try{
            const res = new AddEmployee({
              intime:intime,
              outtime:outtime,
                branchId:branchid,
                groupId:groupid,
                employeeId:1,
                departmentName:department,
                firstName:firstname,
                lastName:lastname,
                 fatherName:fathername,
                motherName:mothername,
                email:email,
               dob:dob,
                 gender:gender,
                mobile:mobile,
                 maritialstatus:maritialstatus,
                 address:address,
               area:area,
                pin:pin,
                city:city,
                state:state,
                 country:country,
                 paddress:paddress,
               parea:parea,
                 ppin:ppin,
                pcity:pcity,
                pstate:pstate,
                
                 idproofdrop:idproofdrop,
            idproof:idproof,
            addressidproof:addressidproof,
            addressidproofdrop:addressidproofdrop,
            qualification:qualification,
            experience:experience,
            referece:referece,
            bankname:bankname,
            bankacno:bankacno,
            bankifsc:bankifsc,
            bankaddress:bankaddress,
            joindate:joindate,
            salary:salary,
            periods:periods,
            paidleave:paidleave,
            image: req.file==undefined?"":req.file.filename,

            })
            res.save();
          result = { success: true, message: "  create  successfully", status: 200 }
         
      }catch(error){
          console.log(error);
  }
      }
 

  } 

 /*  else {
      result = { success: false, message: " pls insert Data", status: 200 }
  } 
  */
   res.json(result)
      }
  });
}





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
    let department = await Departments.find({branchid:req.body.branchid })
    console.log("=>>",resp);
    console.log("=>>",department);
    let data=[]
    resp.map(d=>{
      department.map(dd=>{
        if(d.departmentName==dd.Departmentid){
          data.push({...d._doc,depratmentName:dd.Department})
        }
      })
    }) 

    console.log("empdaat",data);
    if(resp.length>0){
        result={success:true,message:"  get successfully",status:200,data:data}
    }
    else{
        result={success:false,message:"   not  get",status:200,data:data}  
    }
    res.json(result)
}
    const  getEmployeeSomeApi = async(req,res,next)=>{
    let resp = await AddEmployee.find({branchId:req.body.branchid}).then((res)=>res)
    let data=[]
    data.push({label:"Select",value:""})
    resp.map(d=>{
      data.push({label:d.firstName+" "+d.lastName,value:d.employeeId})
    })
    if(resp.length>0){
        result={success:true,message:"  get successfully",status:200,data:data}
    }
    else{
        result={success:false,message:"   not  get",status:200,data:data}  
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



const getemployeeImageUpdateApi = async(req,res,next)=>{

  upload(req, res, async function (err) {
    if (err) {
        res.send(err);
    } else {
        let result = ""
        let status1 = false
        console.log("ontis", req?.body)
        console.log("ontis file", req?.file)
        console.log("ontis",JSON.parse(req?.body?.params)) 
      const{ 
        department,
        firstname,
        lastname,
        fathername,
        mothername,
        email,
        dob,
        gender,
        mobile,
        maritialstatus,
        address,
        area,
        pin,
        city,
        state,
        country,
        paddress,
        parea,
        ppin,
        pcity,
        pstate,
        branchid,
        groupid,
        idproofdrop,
        idproof,
        addressidproof,
        addressidproofdrop,
        qualification,
        experience,
        referece,
        bankname,
        bankacno,
        bankifsc,
        bankaddress,
        joindate,
        salary,
        periods,
        paidleave,
        intime,
        employeeId,
        outtime}=JSON.parse(req?.body?.params)
     await AddEmployee.updateOne({  branchId:branchid,  employeeId:employeeId,groupId:groupid}, 
                {
                  $set: 
                     {
                     
                      intime:intime,
                      outtime:outtime,
                        branchId:branchid,
                        groupId:groupid,
                        employeeId:1,
                        departmentName:department,
                        firstName:firstname,
                        lastName:lastname,
                         fatherName:fathername,
                        motherName:mothername,
                        email:email,
                       dob:dob,
                         gender:gender,
                        mobile:mobile,
                         maritialstatus:maritialstatus,
                         address:address,
                       area:area,
                        pin:pin,
                        city:city,
                        state:state,
                         country:country,
                         paddress:paddress,
                       parea:parea,
                         ppin:ppin,
                        pcity:pcity,
                        pstate:pstate,
                        
                         idproofdrop:idproofdrop,
                    idproof:idproof,
                    addressidproof:addressidproof,
                    addressidproofdrop:addressidproofdrop,
                    qualification:qualification,
                    experience:experience,
                    referece:referece,
                    bankname:bankname,
                    bankacno:bankacno,
                    bankifsc:bankifsc,
                    bankaddress:bankaddress,
                    joindate:joindate,
                    salary:salary,
                    periods:periods,
                    paidleave:paidleave,
                    image: req.file==undefined?"":req.file.filename,
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
        });  
}


module.exports={
        employeeApi,
        getEmployeeApi,
        getEmployeeSomeApi,
        getemployeeUpdateApi,
        employeewithimageApi,
        getemployeeImageUpdateApi
        
}