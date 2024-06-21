var mongoose=require("mongoose");

// Creating EmployeeSchema 
var employeeSchema= new mongoose.Schema({
    FeeHeadName:String,
    FeeFrequency:String,
    Displayorder:String
});

//Exporting Employee Schema
module.exports= mongoose.model("addFeeHeads", employeeSchema);