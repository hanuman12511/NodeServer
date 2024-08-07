

const https = require('https');
const fs = require('fs');
const express = require("express")
const cors = require("cors");
const bodyParser = require('body-parser');
const routes = require('./Routers/Route');
const departmentRoutes = require('./Routers/DeparetmentRoute');
const userAuthRoutes = require('./Routers/UserAuthRoute');
const employeeRoutes = require('./Routers/EmployeeRouter');
const studentRoutes = require('./Routers/studentRoute');
const examRoutes = require('./Routers/ExamRoute');
const notificaltionRoutes = require('./Routers/NotificationRoute');
const DashboardRoutes = require('./Routers/DashboardRoute');


const app = express()
app.use(cors())
app.use(express.json())
const path = require('path');
app.set('uploads', path.join(__dirname, 'uploads'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname+'/public'));
app.use("/uploads", express.static('uploads'))
var publicDir = require('path').join(__dirname,'/public');
app.use(express.static(publicDir));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
global.__basedir = __dirname + "/..";
const connect = require("./db")
const multer = require('multer')

const csvtojson = require('csvtojson')
const reader = require('xlsx') 
connect.Connection("studentmgmt_smt")
app.use('/', routes);
app.use('/', departmentRoutes);
app.use('/', userAuthRoutes);
app.use('/', employeeRoutes);
app.use('/', studentRoutes);
app.use('/', examRoutes);
app.use('/', notificaltionRoutes);
app.use('/', DashboardRoutes);


const port = 4000
/* const options = {key:"",cert:""};
https.createServer(options, app) */

const Student = require("./models/Student"); 
const addBranch = require('./models/addBranch');
app.listen(port, () => console.log(`The server is listening on port ${port}`))
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
          console.log("store=>>",req);
        cb(null, 'public/uploads/')
    },
    filename: function (req, file, cb) {
          console.log("filename=>>",req);
        cb(null, file.fieldname + "-" + Date.now() + ".jpg");
    },
})
const upload = multer({ storage: storage })
app.post('/upload', upload.single('image'), async(req, resp) => {


  console.log("req.file",req.file);
 const{email,name, groupName, branchId,  groupId,institutename,affiliation,
    affiliated,medium, phone, password,username, mobile,contactperson,Address,
    registerno, established, website,logo}=JSON.parse(req?.body?.params) 

 await addBranch.updateOne( 
        {$or:[{ branchId:branchId}]}, 
        {
          $set: 
            {   groupName:groupName,
                branchname:name,
                institutename:institutename,
                affiliation:affiliation,
                affiliated:affiliated,
                medium:medium,
                branchemail:email,
                phone:phone,
                password:password,
                username:username,
                mobile:mobile,
                contactperson:contactperson,
                Address:Address,
                registerno:registerno,
                established:established,
                website:website,
                logo:req.file!==undefined?req.file.filename:logo,
               
            }
        }, 
        { upsert: true }
      ).then((res)=>res).then(data=>{
        console.log("data=>",data);
        try {
            resp.status(200).json({ success:true ,message:"upload successful",status:200 })
        } catch (error) {
            resp.status(500).json({ error: error })
        }
      })  
      
  
     
})
app.post('/profile', async(req, resp) => {
console.log("profile");

 const{email,name, groupName, branchId,  groupId,institutename,affiliation,
    affiliated,medium, phone, password,username, mobile,contactperson,Address,
    registerno, established, website,logo}=req?.body 
console.log(req.body);
 await addBranch.updateOne( 
        {$or:[{ branchId:branchId}]}, 
        {
          $set: 
            {   groupName:groupName,
                branchname:name,
                institutename:institutename,
                affiliation:affiliation,
                affiliated:affiliated,
                medium:medium,
                phone:phone,
                password:password,
                username:username,
                branchemail:email,
                mobile:mobile,
                contactperson:contactperson,
                Address:Address,
                registerno:registerno,
                established:established,
                website:website,
              
               
            }
        }, 
        { upsert: true }
      ).then((res)=>res).then(data=>{
        console.log("data=>",data);
       
            resp.status(200).json({ success:true ,message:"upload successful",status:200 })
       
      }).catch(err=>{
        resp.status(500).json({ message:err})
       
      })  
    })

//excel data file uploade code


var excelStorage = multer.diskStorage({  
    destination:(req,file,cb)=>{  
         cb(null,'./public/excelUploads');     
    },  
    filename:(req,file,cb)=>{  
         cb(null,file.originalname);  
    }  
});  
var excelUploads = multer({storage:excelStorage});  
app.post('/uploadExcelFile', excelUploads.single("file"),async (req, res) =>{  
   console.log("file=>>>",req.body.class);
    console.log("file=>>>",req.file);
   
   let result=""
    let id=0;
    let resp = await Student.find({}).then((res)=>res)
            console.log("display",resp);
            if(resp.length>0){
              
                resp.map(d=>{
                    id=d.studentsId
                })
                 id++  
            }else{
                id=1;
            }
            let datastudent =await  Student.find({ branchId: req.body.branchId, sessionName:req.body.sessionName}).then(res=>res)
          //  console.log(datastudent);
       importFile('./public' + '/excelUploads/' + req.file.filename);
            function importFile(filePath){
            
                const file = reader.readFile(filePath) 
                 let data = [] 
                const sheets = file.SheetNames 
            
               for(let i = 0; i < 1; i++) 
                { 
                   const temp = reader.utils.sheet_to_json( 
                        file.Sheets[file.SheetNames[0]]) 
                     console.log("dataexcel=>>",temp);  
                   temp.forEach((res,index) => { 

             
                    res["studentsId"]=id++
                    res["ClassSection"]=req.body.class
                    res["branchId"]=req.body.branchId
                    res["groupId"]=req.body.groupId
                    res["sessionName"]=req.body.sessionName
                   
                    data.push(res) 
                   }) 
                } 
           // console.log("data",data);

          /*   let dataf =[]
            data.map(d=>{
              datastudent.map(dd=>{
                console.log("stu=>>",d.RegistrationEnrollNo);
                console.log("ex=>",dd.SRNo);
                if(d.RegistrationEnrollNo!=dd.SRNo){
                  dataf.push({...d})
                }
              })
            }) */

           // console.log("datafinal=>>",dataf);

        Student.insertMany(data)
                    .then(function () {
        console.log("Successfully saved defult items to DB");
        result="Successfully saved defult items to DB"
      })
      .catch(function (err) {
        console.log("duplicat=>>",err.writeErrors[0].err.errmsg);
        result=err.writeErrors[0].err.errmsg
      }); 
                 
    }


           res.json(result)
})

app.get("/download", (req, res) => {
  const filePath = __dirname + "/public/excelUploads/sample.xlsx";
  res.download(
      filePath, 
      "sample.xlsx", 
      (err) => {
          if (err) {
              res.send({
                  error : err,
                  msg   : "Problem downloading the file"
              })
          }
  });
});


/* app.get("/download", (req, res) => {
  console.log(req.query.file);
  let file1=req.query.file
  console.log(file1);
  const filePath = __dirname + "/public/uploads/"+file1;
  console.log(filePath);
  res.download(
      filePath, 
      file1,
      (err) => {
          if (err) {
              res.send({
                  error : err,
                  msg   : "Problem downloading the file"
              })
          }
  });
}); */

/* app.get('/download', function(req, res){
  console.log(req.query.file);
 
  let file1 =req.query.file
  console.log(file1);
  const filePath = __dirname + "/public/uploads/"+file1;
  console.log(filePath);
  
  res.download(filePath); // Set disposition and send it.
}); */


app.get("/studentPageApi", (req, res, next) => {
  const{ currentpage, limit, branchid, session} = req?.query
  let page = currentpage >= 1 ? currentpage : 1;
  page = page - 1
  Student.find({ branchId: branchid, sessionName: session})
    .skip(limit * page)
    .limit(limit)
        .then((results) => {
          return res.status(200).send(results);
      })
      .catch((err) => {
          return res.status(500).send(err);
      }); 

});