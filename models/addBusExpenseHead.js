var mongoose=require("mongoose");

// Creating EmployeeSchema 
var employeeSchema= new mongoose.Schema({
    BusExpenseHead:String,
    Detail:String,
    Display:String
});

//Exporting Employee Schema
module.exports= mongoose.model("addBusExpenseHead", employeeSchema);