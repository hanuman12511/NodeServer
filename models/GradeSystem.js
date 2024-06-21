var mongoose=require("mongoose");

// Creating EmployeeSchema 
var employeeSchema= new mongoose.Schema({
    PresentFrom:String,
    PresentTo:String,
    Grade:String,
    PresentTo:String
});

//Exporting Employee Schema
module.exports= mongoose.model("GradeSystem", employeeSchema);