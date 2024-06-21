var mongoose=require("mongoose");

// Creating EmployeeSchema 
var employeeSchema= new mongoose.Schema({
    SubjectHead:String,
    Display:String
});

//Exporting Employee Schema
module.exports= mongoose.model("SubjectHead", employeeSchema);