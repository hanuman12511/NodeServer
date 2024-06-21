var mongoose=require("mongoose");

// Creating EmployeeSchema 
var employeeSchema= new mongoose.Schema({
    ExpenseHead:String,
    SubHeadName:String,
    ContractPerson:String,
    ContractNo:String,
    Remark:String,
    DisplayOrder:String
});

//Exporting Employee Schema
module.exports= mongoose.model("addExpenseSubHead", employeeSchema);