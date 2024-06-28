const https = require('https');
const fs = require('fs');
const express = require("express")
const cors = require("cors");
const bodyParser = require('body-parser');
const routes = require('./Routers/Route');
const app = express()
app.use(cors())
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
global.__basedir = __dirname + "/..";
const connect = require("./db")
const multer = require('multer')

const csvtojson = require('csvtojson')
const reader = require('xlsx') 
connect.Connection("studentmgmt_smt")
app.use('/', routes);
const port = 4000
/* const options = {key:"",cert:""};
https.createServer(options, app) */
app.listen(port, () => console.log(`The server is listening on port ${port}`))




var excelStorage = multer.diskStorage({  
    destination:(req,file,cb)=>{  
         cb(null,'./public/excelUploads');      // file added to the public folder of the root directory
    },  
    filename:(req,file,cb)=>{  
         cb(null,file.originalname);  
    }  
});  
var excelUploads = multer({storage:excelStorage}); 


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

const Student = require("./models/Student") 
app.post('/uploadExcelFile', excelUploads.single("file"),async (req, res) =>{  
   

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
               // console.log(filePath);
                const file = reader.readFile(filePath) 
                 let data = [] 
                const sheets = file.SheetNames 
               // console.log(sheets.length);
               for(let i = 0; i < 1; i++) 
                { 
                   const temp = reader.utils.sheet_to_json( 
                        file.Sheets[file.SheetNames[0]]) 
                       
                   temp.forEach((res,index) => { 
                //    console.log("data row",res);
                    res["studentsId"]=id++
                    res["ClassSection"]=req.body.class
                    res["branchId"]=req.body.branchId
                    res["groupId"]=req.body.groupId
                    res["sessionName"]=req.body.sessionName
                   
                    data.push(res) 
                   }) 
                } 
            //   console.log(data);    
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


/* 
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://hanuplusitsolution:o8IJY8a7hlKrcJX2@cluster0.wzwpge2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir); */



/* 
mongodb+srv://hanuplusitsolution:o8IJY8a7hlKrcJX2@cluster0.wzwpge2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0 */


/* app.post("/loginuser", UserControll.userLogin ) */
/* app.post("/loginuser", (req, res) => {
    let resultdata=[]
    let logdata = req.body
    let len = Object.keys(req.body).length
    if(len){
        if(req.body.email!='' && req.body.password!='' ){
            resultdata={success:true,message:"login data get successfully",data:logdata}
        }
        else{
            resultdata={success:false,message:"pls enter email and password",data:logdata}
        }
    }
    else{
        resultdata={success:false,message:"login data not get",data:logdata}
    }
    res.send(resultdata)
    }
  ) */
 
/* 
  app.post("/registeruser", (req, res) => {
    let resultdata=[]
    let logdata = req.body
    let len = Object.keys(req.body).length
    if(len){
        resultdata={success:true,message:" register data get successfully",data:logdata}
    }
    else{
        resultdata={success:false,message:"register data not get ",data:logdata}
    }
    res.send(resultdata)
    }
  ) 

  app.post("/leadadd", (req, res) => {
    let resultdata=[]
    let logdata = req.body
    let len = Object.keys(req.body).length
    if(len){
        resultdata={success:true,message:" lead data get successfully",data:logdata}
    }
    else{
        resultdata={success:false,message:"lead data not get ",data:logdata}
    }
    res.send(resultdata)
    }
  ) 

  
  app.get("/leadshow", (req, res) => {
    let resultdata=[]
        let data={
            "name":"",
            "phone":"",
            "status":[],
            "rating":"",
            "acquired":"time",
            "addnote":"",
            "followp":"datetime",
            "pdf":'',
            "amount":[]
            }
         
        resultdata={success:true,message:"lead data  show successfully ",data:data}
        res.send(resultdata)
    }
  )  */