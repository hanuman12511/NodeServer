var mongoose=require("mongoose");

// Creating EmployeeSchema 
var employeeSchema= new mongoose.Schema({
    notificationId:Number,
    branchId:Number,
    groupId:String,
    sessionId:String,
    date:String,
     data:Array,
     title:String,
    description: String,
    filename: String,
    status:String,
    statustype:String,
    readstatus:String
   
});

//Exporting Employee Schema
module.exports= mongoose.model("notification", employeeSchema);