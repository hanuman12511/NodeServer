var mongoose=require("mongoose");

// Creating EmployeeSchema 
var employeeSchema= new mongoose.Schema({
    HeadName:String,
    DisplayOrder:String
});

//Exporting Employee Schema
module.exports= mongoose.model("addExpenseHead", employeeSchema);