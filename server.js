const https = require('https');
const fs = require('fs');
const express = require("express")
const cors = require("cors");
const bodyParser = require('body-parser');
const routes = require('./Routers/Route');
const app = express()
app.use(cors())
app.use(express.json())
const path = require('path');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
global.__basedir = __dirname + "/..";
const connect = require("./db")
const multer = require('multer')
const sharp = require("sharp")
const csvtojson = require('csvtojson')
const reader = require('xlsx') 
connect.Connection("student")
app.use('/', routes);
const port = 4000
/* const options = {key:"",cert:""};
https.createServer(options, app) */

app.use(express.static('public'));

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/uploads', express.static(path.join(__dirname, 'images')));


app.listen(port, () => console.log(`The server is listening on port ${port}`))

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

/* var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Uploads is the Upload_folder_name
        cb(null, "uploads");
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + ".jpg");
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
        var filetypes = /jpeg|jpg|png/;
        var mimetype = filetypes.test(file.mimetype);
 
        var extname = filetypes.test(
            path.extname(file.originalname).toLowerCase()
        );
 
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
}).single("mypic"); */
 

 
app.post("/uploadProfilePicture", function (req, res, next) {

    console.log(req.body);
    console.log(req.file);
    upload(req, res, function (err) {
        if (err) {
            res.send(err);
        } else {
            res.send(req);
        }
    });
})

/* var excelStorage = multer.diskStorage({  
    destination:(req,file,cb)=>{  
         cb(null,'./public/excelUploads');      // file added to the public folder of the root directory
    },  
    filename:(req,file,cb)=>{  
         cb(null,file.originalname);  
    }  
});  */ 
//var excelUploads = multer({storage:excelStorage}); 

/* 
app.get("/download", (req, res) => {
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
});  
 */
const Student = require("./models/Student"); 
const addBranch = require('./models/addBranch');


const storage = multer.memoryStorage();
const upload = multer({ storage });

app.post('/uploadimage',  upload.single('file'), async (req, res) => {


    console.log(req.file);
    console.log(req.body);
  /*   fs.access("./public/uploads", (error) => {
        if (error) {
          fs.mkdirSync("./public/uploads");
        }
      });
      const { buffer, originalname } = req.file;
       const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);  
      const ref = `${uniqueSuffix}.png`;
   
  await sharp(buffer)
   .resize(100, 100)
   .png()
    .toFile("./public/uploads/" + ref);  */
    
    const{name, groupName, branchId,  groupId,institutename,affiliation,
        affiliated,medium, phone, password,username, mobile,contactperson,Address,
        registerno, established, website}=JSON.parse(req.body.params)

       await addBranch.updateOne( 
            {$or:[{ branchId:branchId}, { groupId:groupId  }]}, 
            {
              $set: 
                        {
                   
                    groupName:groupName,
                   
                    institutename:institutename,
                    affiliation:affiliation,
                    affiliated:affiliated,
                    medium:medium,
                    phone:phone,
                    branchname:name,
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
            console.log(data);
          })

          res.json("data")

}, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
})


/* 
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


           res.json("fbfhfghgfh")
})
 */