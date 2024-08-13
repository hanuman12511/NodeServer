var mongoose=require("mongoose");

// Creating EmployeeSchema 
var employeeSchema= new mongoose.Schema({
   leaveId:Number,
    branchId:Number,
    groupId:String,
    sessionId:String,
    startdate:String,
    enddate:String,
    personId:Number,
    persontype:String,
     title:String,
    description: String,
    filename: String,
    status:String,
    leavestatus:String,
    comment:String
    
   
});

//Exporting Employee Schema
module.exports= mongoose.model("addleave", employeeSchema);