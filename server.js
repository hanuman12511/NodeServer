
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
const port = 4000
/* const options = {key:"",cert:""};
https.createServer(options, app) */

app.use(express.static(__dirname+'/public'));
const Student = require("./models/Student"); 
const addBranch = require('./models/addBranch');

app.listen(port, () => console.log(`The server is listening on port ${port}`))
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + ".jpg");
    },
})
const upload = multer({ storage: storage })
app.post('/upload', upload.single('file'), async(req, res) => {

 /*  console.log(req.body);
    console.log(req.file);
    console.log(req);
    console.log(req.url); */
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
                logo:req.file.filename,
               
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
