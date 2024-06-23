var mongoose=require("mongoose");

// Creating EmployeeSchema 
var employeeSchema= new mongoose.Schema({
    feeId:Number,
    studentId:Number,
    classDetailId:Number,
    Deposited:Number,
    Rebat:Number,
    Due:Number,
    NextDate:Date,
    RecDate:Date,

});

//Exporting Employee Schema
module.exports= mongoose.model("StudentFee", employeeSchema);