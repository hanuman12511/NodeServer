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
connect.Connection("student")
app.use('/', routes);
const port = 4000
app.listen(port, () => console.log(`The server is listening on port ${port}`))







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