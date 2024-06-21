var mongoose=require("mongoose");

// Creating EmployeeSchema 
var employeeSchema= new mongoose.Schema({
    PresentageFrom:String,
    PresentageTo:String,
    Division:String,
    DisplayOrder:String
});

//Exporting Employee Schema
module.exports= mongoose.model("addDivisionSystem", employeeSchema);