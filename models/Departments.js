var mongoose=require("mongoose");

// Creating EmployeeSchema 
var employeeSchema= new mongoose.Schema({
    Department:String,
    Display:String,
    branchid:String,
    groupid:String,
    branchControl:Boolean ,
    Departmentid:String,
});

//Exporting Employee Schema
module.exports= mongoose.model("Departments", employeeSchema);