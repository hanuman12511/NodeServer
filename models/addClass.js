var mongoose=require("mongoose");

// Creating EmployeeSchema 
var employeeSchema= new mongoose.Schema({
    ClassName:String,
    DisplayOrder:String
});

//Exporting Employee Schema
module.exports= mongoose.model("addClass", employeeSchema);