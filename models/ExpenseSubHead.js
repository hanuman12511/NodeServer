var mongoose=require("mongoose");

// Creating EmployeeSchema 
var employeeSchema= new mongoose.Schema({
    SubHead:String,
    Head:String,
    ContractPerson:String,
    ContractNo:String,
    Display:String
});

//Exporting Employee Schema
module.exports= mongoose.model("ExpenseSubHead", employeeSchema);