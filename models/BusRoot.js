var mongoose=require("mongoose");

// Creating EmployeeSchema 
var employeeSchema= new mongoose.Schema({
    ExpenceHead:String,
    Detail:String,
    Display:String
});

//Exporting Employee Schema
module.exports= mongoose.model("BusRoot", employeeSchema);