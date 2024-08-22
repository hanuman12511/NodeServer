var mongoose=require("mongoose");

// Creating EmployeeSchema 
var employeeSchema= new mongoose.Schema({
   branchId:Number,
    groupId:String,
    sessionId:String,
   date:String,
   data:Array,
   AttendenceType:String,
   statusatt:Boolean,
   class:String
});

//Exporting Employee Schema
module.exports= mongoose.model("studentAttandence", employeeSchema);