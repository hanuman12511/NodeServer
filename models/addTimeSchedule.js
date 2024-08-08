var mongoose=require("mongoose");

// Creating EmployeeSchema 
var employeeSchema= new mongoose.Schema({
    branchid:String,
    groupid:String,
    timeschedulename:{
        type: String,
        unique: true,
        required: [true, "Please enter time schedule"],
        },	
    intime:String,
    outtime:String,
    display:Number,
    timescheduleid:Number,
    branchControl:Boolean ,
});

//Exporting Employee Schema
module.exports= mongoose.model("addTimeSchedule", employeeSchema);