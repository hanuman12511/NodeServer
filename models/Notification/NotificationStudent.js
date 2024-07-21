var mongoose=require("mongoose");

// Creating EmployeeSchema 
var employeeSchema= new mongoose.Schema({
    notificationId:Number,
    branchId:Number,
    groupId:String,
    sessionId:String,
    date:String,
     data:Array,
     status:String
});

//Exporting Employee Schema
module.exports= mongoose.model("studentnotification", employeeSchema);