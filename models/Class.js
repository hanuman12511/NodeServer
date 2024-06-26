var mongoose=require("mongoose");

// Creating EmployeeSchema 
var employeeSchema= new mongoose.Schema({
    branchid:String,
    groupid:String,
    classId:Number,
    Class:String,
    Display:String
});

//Exporting Employee Schema
module.exports= mongoose.model("Class", employeeSchema);