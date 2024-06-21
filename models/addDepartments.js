var mongoose=require("mongoose");

// Creating EmployeeSchema 
var employeeSchema= new mongoose.Schema({
    DepartmentName:String,
    DisplayOrder:String
});

//Exporting Employee Schema
module.exports= mongoose.model("addDepartments", employeeSchema);