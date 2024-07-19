

const https = require('https');
const fs = require('fs');
const express = require("express")
const cors = require("cors");
const bodyParser = require('body-parser');
const routes = require('./Routers/Route');
const departmentRoutes = require('./Routers/DeparetmentRoute');
const userAuthRoutes = require('./Routers/UserAuthRoute');
const app = express()
app.use(cors())
app.use(express.json())
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
global.__basedir = __dirname + "/..";
const connect = require("./db")
const multer = require('multer')

const csvtojson = require('csvtojson')
const reader = require('xlsx') 
connect.Connection("student")
app.use('/', routes);
app.use('/', departmentRoutes);
app.use('/', userAuthRoutes);
const port = 4000
/* const options = {key:"",cert:""};
https.createServer(options, app) */

app.use(express.static(__dirname+'/public'));
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
app.post('/upload', upload.single('image'), async(req, res) => {

 console.log("body",req.body);
    console.log("file",req.body);
    
   
 const{name, groupName, branchId,  groupId,institutename,affiliation,
    affiliated,medium, phone, password,username, mobile,contactperson,Address,
    registerno, established, website}=JSON.parse(req?.body?.params) 

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
                mobile:mobile,
                contactperson:contactperson,
                Address:Address,
                registerno:registerno,
                established:established,
                website:website,
                logo:req.body.file,
               
            }
        }, 
        { upsert: true }
      ).then((res)=>res).then(data=>{
        console.log("data=>",data);
        try {
            res.status(200).json({ success: "file upload successful" })
        } catch (error) {
            res.status(500).json({ error: error })
        }
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
            
       importFile('./public' + '/excelUploads/' + req.file.filename);
            function importFile(filePath){
            
                const file = reader.readFile(filePath) 
                 let data = [] 
                const sheets = file.SheetNames 
             
               for(let i = 0; i < 1; i++) 
                { 
                   const temp = reader.utils.sheet_to_json( 
                        file.Sheets[file.SheetNames[0]]) 
                       
                   temp.forEach((res,index) => { 
              
                    res["studentsId"]=id++
                    res["ClassSection"]=req.body.class
                    res["branchId"]=req.body.branchId
                    res["groupId"]=req.body.groupId
                    res["sessionName"]=req.body.sessionName
                   
                    data.push(res) 
                   }) 
                } 
              
        Student.insertMany(data)
                    .then(function () {
        console.log("Successfully saved defult items to DB");
      })
      .catch(function (err) {
        console.log(err);
      }); 
                 
    }


           res.json("file upload")
})


