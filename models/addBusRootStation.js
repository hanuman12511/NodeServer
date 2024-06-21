var mongoose=require("mongoose");

// Creating EmployeeSchema 
var employeeSchema= new mongoose.Schema({
    BusNo:String,
    Root:String,
    Station:String,
    Detail:String
});

//Exporting Employee Schema
module.exports= mongoose.model("addBusRootStation", employeeSchema);