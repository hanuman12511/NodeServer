var mongoose=require("mongoose");

// Creating EmployeeSchema 
var employeeSchema= new mongoose.Schema({
    branchId:Number,
    groupId:String,
    sessionId:String,
    employeeId:Number,
    employeeName:String,
    Subject:String,
    Display:String
});

//Exporting Employee Schema
module.exports= mongoose.model("addEmployee", employeeSchema);