var mongoose=require("mongoose");

// Creating EmployeeSchema 
var employeeSchema= new mongoose.Schema({
    Class:String,
    Section:String
});

//Exporting Employee Schema
module.exports= mongoose.model("addClassDetails", employeeSchema);