var mongoose=require("mongoose");

// Creating EmployeeSchema 
var employeeSchema= new mongoose.Schema({
    Bus:String,
    Root:String,
    Driver:String,
    ContractNo:String,
    Stations:String,
    Detail:String
});

//Exporting Employee Schema
module.exports= mongoose.model("BusRootStation", employeeSchema);