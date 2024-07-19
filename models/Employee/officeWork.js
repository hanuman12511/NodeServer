var mongoose=require("mongoose");

// Creating EmployeeSchema 
var employeeSchema= new mongoose.Schema({
   oficeworkId:String,
   employeeId:String,
   branchid:String,
   groupid:String,
   sessionid:String,
   deparmentId:String,
   intime:String,
   outtime:String,

});

//Exporting Employee Schema
module.exports= mongoose.model("officework", employeeSchema);