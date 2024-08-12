var mongoose=require("mongoose");

// Creating EmployeeSchema 
var employeeSchema= new mongoose.Schema({
    newsId:Number,
    branchId:Number,
    groupId:String,
    sessionId:String,
    startdate:String,
   
     title:String,
    description: String,
    filename: String,
    
   
});

//Exporting Employee Schema
module.exports= mongoose.model("addnews", employeeSchema);