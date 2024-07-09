var mongoose=require("mongoose");

// Creating EmployeeSchema 
var employeeSchema= new mongoose.Schema({
    sessionId:Number,
    SessionName:String,
    StartMonth:String,
    branchid:String,
    groupid:String,
    branchControl:Boolean ,
           
});

//Exporting Employee Schema
module.exports= mongoose.model("SessionHeads", employeeSchema);