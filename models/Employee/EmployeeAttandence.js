var mongoose=require("mongoose");

// Creating EmployeeSchema 
var employeeSchema= new mongoose.Schema({
   branchId:Number,
    groupId:String,
    sessionId:String,
   date:String,
   data:Array
});

//Exporting Employee Schema
module.exports= mongoose.model("EmployeeAttandence", employeeSchema);