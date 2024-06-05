
/* const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/db", {useNewUrlParser: true});
const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    confirmpassword: String
   });
   
   const Register = mongoose.model("seldom", userSchema); */
 /*   const docs =  Dog.find();
   console.log(docs); */


  /*  Dog.find({}).then((user)=>{
    console.log(user);
   })
 */


const userData = require("../../models/User")   
const userData1 = require("../../models/userSign")   


const userSign = async(req,res,next)=>{
    console.log("req.body.phone",req.body.phone);

    let resultdata=[]
    let len = Object.keys(req.body).length
    if(len){
        if(req.body.phone!='' ){
            let user = await userData1.findOne({phone:req.body.phone}).then((user)=> {return user})
            if(user){   
                resultdata={success:true,message:" user register  successfully","length":1,"data":req.body}
        }else{
           
            const user = new userData1({
                phone: req.body.phone,
            });
            user.save(); 
            resultdata={success:true,message:" user register  successfully","length":1,"data":req.body}
        }
               
        }
        else{
            resultdata={success:false,message:"pls enter phone","length":1}
        }
    }
    else{
        resultdata={success:false,message:"user  not register  successfully","length":0}
    }
   // res.send(resultdata)
   res.json(resultdata)
}
const userRegister= async(req,res,next)=>{

    let resultdata=[]
    let len = Object.keys(req.body).length
    if(len){
        if(req.body.email!='' && req.body.password!='' ){
            let user = await userData.findOne({email:req.body.email}).then((user)=> {return user})
            if(user){   
                resultdata={success:false,message:" user exits   ","length":0}
        }else{
           
            const user = new userData({
                email: req.body.email,
                password: req.body.password,
                confirmpassword: req.body.confirmpassword,
            });
            user.save(); 
            resultdata={success:true,message:" user register  successfully","length":1,"data":req.body}
        }
               
        }
        else{
            resultdata={success:false,message:"pls enter email and password","length":1}
        }
    }
    else{
        resultdata={success:false,message:"user  not register  successfully","length":0}
    }
   // res.send(resultdata)
   res.json(resultdata)
}
const userLogin= async(req,res,next)=>{

    let resultdata=[]
    let logdata = req.body
    let len = Object.keys(req.body).length
    if(len){
        if(req.body.email!='' && req.body.password!='' ){
         
            let user = await userData.findOne({email:req.body.email,password:req.body.password}).then((user)=> {return user})
            
                if(user){
                    resultdata.push({success:true,message:"login data get successfully",data:user,"length":1})
                }
                else{
                    resultdata.push({success:false,message:"user not login  successfully",data:user,"length":1})
                
                }
        
          
        }
        else{
            resultdata={success:false,message:"pls enter email and password",data:logdata,"length":1}
        }
    }
    else{
        resultdata={success:false,message:"login data not get",data:logdata,"length":0}
    }
   // res.send(resultdata)
   res.json(resultdata)
}


module.exports={userLogin,userRegister,userSign}