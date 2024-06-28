var mongoose=require("mongoose");

// Creating EmployeeSchema 
var employeeSchema= new mongoose.Schema({
    branchid:String,
    groupid:String,
    feeHeadId:Number,
    FeeHead:String,
    FeeFrequencyId:Number,
   
    Display:String
});

//Exporting Employee Schema
module.exports= mongoose.model("FeeHeads", employeeSchema);