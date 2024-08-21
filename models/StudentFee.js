var mongoose=require("mongoose");

// Creating EmployeeSchema 
var employeeSchema= new mongoose.Schema({
    branchId:Number,
    groupId:String,
    sessionName:String,
    studentsId:Number,
    feeId:Number,
    classDetailId:Number,
    Deposited:Array,
    Rebat:Number,
    Due:Number,
    feeDetails:Array,
    NextDate:String,
    RecDate:String,

});

//Exporting Employee Schema
module.exports= mongoose.model("StudentFee", employeeSchema);