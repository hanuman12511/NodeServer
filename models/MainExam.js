var mongoose=require("mongoose");

// Creating EmployeeSchema 
var employeeSchema= new mongoose.Schema({
    branchid:String,
    groupid:String,
    sessionName:String,
    Exam:String,
    ExamId:Number,
    Display:String,
    branchControl:Boolean
});

//Exporting Employee Schema
module.exports= mongoose.model("MainExam", employeeSchema);