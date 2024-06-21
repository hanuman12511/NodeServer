var mongoose=require("mongoose");

// Creating EmployeeSchema 
var employeeSchema= new mongoose.Schema({
    PresentageFrom:String,
    PresentageTo:String,
    Grade:String,
    DisplayOrder:String
});

//Exporting Employee Schema
module.exports= mongoose.model("addGradeSystem", employeeSchema);