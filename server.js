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

const csvtojson = require('csvtojson')
const reader = require('xlsx') 
connect.Connection("student")
app.use('/', routes);
const port = 4000
/* const options = {key:"",cert:""};
https.createServer(options, app) */

app.use(express.static('public'));
const Student = require("./models/Student"); 
const addBranch = require('./models/addBranch');
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/uploads', express.static(path.join(__dirname, 'images')));


app.listen(port, () => console.log(`The server is listening on port ${port}`))

// SET STORAGE
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "uploads");
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + ".jpg");
    }
    });
    const uploadFiles = multer({ storage: storage });
    app.post("/fileupload", uploadFiles.single("file"), (req, res, next) => {
    const file = req.file;
    if (!file) {
    const error = new Error("Please upload a file");
    error.httpStatusCode = 400;
    return next(error);
    }
    res.json({
    success: true,
    statusCode: 200,
    fileName: file.filename });
    });
    

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
    }).single("file"); 
app.post('/uploadimage', uploadFiles.single("file"), async (req, res) => {
    
 /*    upload(req, res, function (err) {
        console.log("file",req.file);
    console.log("body",req.body);
        if (err) {
            res.send(err);
        } else {
            res.send(req);
        }
    }); */
   const{name, groupName, branchId,  groupId,institutename,affiliation,
        affiliated,medium, phone, password,username, mobile,contactperson,Address,
        registerno, established, website}=JSON.parse(req?.body?.params) 

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
