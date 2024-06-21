var mongoose=require("mongoose");

// Creating EmployeeSchema 
var employeeSchema= new mongoose.Schema({
    ExamName:String,
    ExamType:String,
    CreatedOn:String,
    Display:String
});

//Exporting Employee Schema
module.exports= mongoose.model("DisplayOrder", employeeSchema);