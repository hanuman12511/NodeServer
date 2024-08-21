

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
const dotenv = require('dotenv');

// get config vars
dotenv.config();

// access config var
process.env.TOKEN_SECRET;

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

app.use((req, res, next) => {
  // Set CORS headers
  res.header("Access-Control-Allow-Origin", process.env.FRONTEND_URL); // Replace with your frontend domain
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", "true"); // Allow credentials (cookies, etc.)

  // Pass to next layer of middleware
  next();
});
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





// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getMessaging } = require("firebase/messaging");
const admin = require('firebase-admin');
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDS1T3smvl3yJXbHxNzXE7xFv9GlNdn648",
  authDomain: "leadapp-c39d8.firebaseapp.com",
  projectId: "leadapp-c39d8",
  storageBucket: "leadapp-c39d8.appspot.com",
  messagingSenderId: "834823755671",
  appId: "1:834823755671:web:c6a69fe90221e387dfd6d2",
  measurementId: "G-VG7WP9SNVZ",
  credential: admin.credential.applicationDefault(),
};

// Initialize Firebase
/* const app1 = initializeApp(firebaseConfig); */


var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

/* let message1 = getMessaging(app1) */


app.post("/sendNotification", (req, res) => {
  const receivedToken = req.body.fcmToken; // Fcm token received by front end application
  const message = {
  notification: {
  title: "Notification Received !",
  body: "You received this push notification using Firebase and Node js ",
  },
  token: receivedToken,
  };
/*   let m=app1.messaging(); */
/* admin.messaging().sendMulticast(message) */
admin.messaging().send(message)
  .then((response) => {
  res
  .status(200)
  .json({ message: "Notification Sent", token: receivedToken });
  console.log("Notification Sent");
  })
  
  .catch((error) => {
  res.status(400).send(error);
  console.log("Error sending message:", error);
  });
  });