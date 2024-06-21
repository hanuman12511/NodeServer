var mongoose=require("mongoose");

// Creating EmployeeSchema 
var employeeSchema= new mongoose.Schema({
    BusNo:String,
    Department:String,
    Driver:String,
    Detail:String,
    DisplayOrder:String
});

//Exporting Employee Schema
module.exports= mongoose.model("addBusDetail", employeeSchema);