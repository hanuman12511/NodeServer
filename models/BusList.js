var mongoose=require("mongoose");

// Creating EmployeeSchema 
var employeeSchema= new mongoose.Schema({
    Bus:String,
    Driver:String,
    ContractNo:String,
    Detail:String,
    Display:String
});

//Exporting Employee Schema
module.exports= mongoose.model("BusList", employeeSchema);