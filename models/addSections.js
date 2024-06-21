var mongoose=require("mongoose");

// Creating EmployeeSchema 
var employeeSchema= new mongoose.Schema({
    SessionName:String,
    Displayorder:String
});

//Exporting Employee Schema
module.exports= mongoose.model("addSection", employeeSchema);