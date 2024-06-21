var mongoose=require("mongoose");

// Creating EmployeeSchema 
var employeeSchema= new mongoose.Schema({
    SubjectCode:String,
    StartMonth:String,
    DisplayOrder:String
});

//Exporting Employee Schema
module.exports= mongoose.model("AddSubjects", employeeSchema);