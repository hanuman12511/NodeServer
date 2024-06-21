var mongoose=require("mongoose");

// Creating EmployeeSchema 
var employeeSchema= new mongoose.Schema({
    feeHeadId:Number,
    FeeHead:String,
    FeeFrequency:String,
    Display:String
});

//Exporting Employee Schema
module.exports= mongoose.model("FeeHeads", employeeSchema);