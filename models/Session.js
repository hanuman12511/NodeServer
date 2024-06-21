var mongoose=require("mongoose");

// Creating EmployeeSchema 
var employeeSchema= new mongoose.Schema({
    SessionName:String,
    StartMonth:String
});

//Exporting Employee Schema
module.exports= mongoose.model("addSession", employeeSchema);