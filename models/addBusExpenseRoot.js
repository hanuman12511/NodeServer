var mongoose=require("mongoose");

// Creating EmployeeSchema 
var employeeSchema= new mongoose.Schema({
    BusRoot:String,
    Detail:String,
    DisplayOrder:String
});

//Exporting Employee Schema
module.exports= mongoose.model("addBusExpenseRoot", employeeSchema);