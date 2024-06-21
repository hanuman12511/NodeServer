var mongoose=require("mongoose");

// Creating EmployeeSchema 
var employeeSchema= new mongoose.Schema({
    HeadName:String,
    Display:String
});

//Exporting Employee Schema
module.exports= mongoose.model("ExpenseHead", employeeSchema);