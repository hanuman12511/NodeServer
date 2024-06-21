var mongoose=require("mongoose");

// Creating EmployeeSchema 
var employeeSchema= new mongoose.Schema({
    FeeHead:String,
    FeeFrequency:String,
    Display:String
});

//Exporting Employee Schema
module.exports= mongoose.model("FeeHeads", employeeSchema);