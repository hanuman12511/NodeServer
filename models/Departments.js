var mongoose=require("mongoose");

// Creating EmployeeSchema 
var employeeSchema= new mongoose.Schema({
    Department:String,
    Display:String
});

//Exporting Employee Schema
module.exports= mongoose.model("Departments", employeeSchema);