var mongoose=require("mongoose");

// Creating EmployeeSchema 
var employeeSchema= new mongoose.Schema({
    Subjects:String,
    SubjectCode:String,
    Display:String
});

//Exporting Employee Schema
module.exports= mongoose.model("Subjects", employeeSchema);