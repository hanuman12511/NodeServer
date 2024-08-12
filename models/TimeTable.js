var mongoose=require("mongoose");

// Creating EmployeeSchema 
var employeeSchema= new mongoose.Schema({
    branchid:String,
    groupid:String,
    display:Number,
    classsection:String,
    subject:String,
    timeschedule:String,
    employee:String,
    employeeid:String,
    sessionId:String,
    selectday:Array,
    timetableid:Number
});

//Exporting Employee Schema
module.exports= mongoose.model("TimeTable", employeeSchema);