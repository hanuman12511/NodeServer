var mongoose=require("mongoose");

// Creating EmployeeSchema 
var employeeSchema= new mongoose.Schema({
    Sections:String,
    Display:String
});

//Exporting Employee Schema
module.exports= mongoose.model("Section", employeeSchema);