var mongoose=require("mongoose");

// Creating EmployeeSchema 
var employeeSchema= new mongoose.Schema({
    UnitName:String,
    Display:String
});

//Exporting Employee Schema
module.exports= mongoose.model("addExpenseUnit", employeeSchema);