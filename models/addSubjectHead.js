var mongoose=require("mongoose");

// Creating EmployeeSchema 
var employeeSchema= new mongoose.Schema({
    SubjectHeadName:String,
    DisplayOrder:String
});

//Exporting Employee Schema
module.exports= mongoose.model("addSubjectHead", employeeSchema);