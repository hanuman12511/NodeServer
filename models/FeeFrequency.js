var mongoose=require("mongoose");

// Creating EmployeeSchema 
var employeeSchema= new mongoose.Schema({
    branchid:String,
    groupid:String,
    feefrequencyId:Number,
    FeeFrequency:String,
    Display:String
});

//Exporting Employee Schema
module.exports= mongoose.model("FeeFrequency", employeeSchema);