var mongoose=require("mongoose");

// Creating EmployeeSchema 
var employeeSchema= new mongoose.Schema({
    Class:String,
    Display:String
});

//Exporting Employee Schema
module.exports= mongoose.model("Class", employeeSchema);