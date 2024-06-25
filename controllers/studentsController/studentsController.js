const Student = require("../../models/Student") 
const StudentFee = require("../../models/StudentFee") 
const multer = require('multer')
var excelStorage = multer.diskStorage({  
    destination:(req,file,cb)=>{  
         cb(null,'./public/excelUploads');      // file added to the public folder of the root directory
    },  
    filename:(req,file,cb)=>{  
         cb(null,file.originalname);  
    }  
});  
var excelUploads = multer({storage:excelStorage});




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
            console.log("display",resp);
            if(resp.length>0){
                let id = 0
                resp.map(d=>{
                    id=d.studentsId
                })
                 id++  
                    const res = new Student({
                        
                        studentsId:id,
                        FirstName:req.body.firstname,
                        LastName:req.body.lastname,
                        FName:req.body.fathername,
                        MotherName:req.body.mothername,
                        EmailID:req.body.email,
                        DOB:req.body.dob,
                        Gender:req.body.gender,
                        Phyical:req.body.physical,
     Category:req.body.category,
     password:req.body.password,
     MobileNo:req.body.mobile,
     CAddress:req.body.address,
     CArea:req.body.area,
     CPincode:req.body.pin,
     CCity:req.body.city,
     CState:req.body.state,
     CCountry:req.body.country,
     PAddress:req.body.paddress,
     PArea:req.body.parea,
     PPincode:req.body.ppin,
     PCity:req.body.pcity,
     PState:req.body.pstate,
     PCountry:req.body.pcountry,
     RTE:req.body.rte,
 
      RegiterPageNo:req.body.registerpageno,
      RegistrationEnrollNo:req.body.registrationenrollno,
      ClassSection:req.body.classsection,
      AdmissionDate:req.body.admissiondate,
     
      Schoolname:req.body.previousschoolname,
      SRNo:req.body.srno,
      previousclassname:req.body.previousclassname,
      Root:req.body.root,
      Stand:req.body.stand,
      Fare:req.body.fare,
      status:"students",
      otp:req.body.otp,
      PreviousDueFees:req.body.PreviousDueFees
                        
                    });
                res.save();
                status=true
                }
                else{
                    const res = new Student({
                        studentsId:1,
                        FirstName:req.body.firstname,
                        LastName:req.body.lastname,
                        FName:req.body.fathername,
                        MotherName:req.body.mothername,
                        EmailID:req.body.email,
                        DOB:req.body.dob,
                        Gender:req.body.gender,
                        Phyical:req.body.physical,
     Category:req.body.category,
     password:req.body.password,
     MobileNo:req.body.mobile,
     CAddress:req.body.address,
     CArea:req.body.area,
     CPincode:req.body.pin,
     CCity:req.body.city,
     CState:req.body.state,
     CCountry:req.body.country,
     PAddress:req.body.paddress,
     PArea:req.body.parea,
     PPincode:req.body.ppin,
     PCity:req.body.pcity,
     PState:req.body.pstate,
     PCountry:req.body.pcountry,
     RTE:req.body.rte,
 
      RegiterPageNo:req.body.registerpageno,
      RegistrationEnrollNo:req.body.registrationenrollno,
      ClassSection:req.body.classsection,
      AdmissionDate:req.body.admissiondate,
     
      Schoolname:req.body.previousschoolname,
      SRNo:req.body.srno,
      previousclassname:req.body.previousclassname,
      Root:req.body.root,
      Stand:req.body.stand,
      Fare:req.body.fare,
      status:"students",
      otp:req.body.otp,
      PreviousDueFees:req.body.PreviousDueFees
                    
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







//***************************************** */

 


const  downloadApi = async(req,res,next)=>{
    const filePath = __dirname + "/public/excelUploads/studentmgmt.xlsx";
    res.download(
        filePath, 
        "studentmgmt.xlsx", // Remember to include file extension
        (err) => {
            if (err) {
                res.send({
                    error : err,
                    msg   : "Problem downloading the file"
                })
            }
    });

}
const uploadExcelFile=async(req, res,next) =>{  
   

/* 

    var multiparty = require('multiparty');
    var form = new multiparty.Form();
    var fs = require('fs');
    
    form.parse(req, function(err, fields, files) {  
        var imgArray = files.imatges;
    
    
        for (var i = 0; i < imgArray.length; i++) {
            var newPath = './public/uploads/'+fields.file+'/';
            var singleImg = imgArray[i];
            newPath+= singleImg.originalFilename;
            readAndWriteFile(singleImg, newPath);           
        }
        res.send("File uploaded to: " + newPath);
    
    });
    
    function readAndWriteFile(singleImg, newPath) {
    
            fs.readFile(singleImg.path , function(err,data) {
                fs.writeFile(newPath,data, function(err) {
                    if (err) console.log('ERRRRRR!! :'+err);
                    console.log('Fitxer: '+singleImg.originalFilename +' - '+ newPath);
                })
            })
    }

 */



    console.log("file=>>>",req.body.class);
    console.log("file=>>>",req.file);
    
       importFile('./public' + '/excelUploads/' + req.file.filename);
            function importFile(filePath){
                console.log(filePath);
                const file = reader.readFile(filePath) 
                 let data = [] 
                const sheets = file.SheetNames 
                console.log(sheets.length);
               for(let i = 0; i < sheets.length; i++) 
                { 
                   const temp = reader.utils.sheet_to_json( 
                        file.Sheets[file.SheetNames[i]]) 
                   temp.forEach((res,index) => { 
                    console.log("data row",res);
                    res["studentsId"]=index+1
                    res["ClassSection"]=req.body.class
                      data.push(res) 
                   }) 
                } 
               console.log(data);    
        Student.insertMany(data)
                    .then(function () {
        console.log("Successfully saved defult items to DB");
      })
      .catch(function (err) {
        console.log(err);
      }); 
                 
    }


           res.json("fbfhfghgfh")
}

//******************************** */

module.exports={
    studentsApi,
    getStudentsApi,
    displayStudentsClassBy,
    studentAttendance,
    studentsFeeApi,
    getstudentsFeeApi,
    studentLogin,
    uploadExcelFile,
    downloadApi
}
