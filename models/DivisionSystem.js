var mongoose=require("mongoose");

// Creating EmployeeSchema 
var employeeSchema= new mongoose.Schema({
    PresentageFromnName:String,
    PresentageTo:String,
    Division:String,
    Display:String
});

//Exporting Employee Schema
module.exports= mongoose.model("DivisionSystem", employeeSchema);