var mongoose=require("mongoose");

// Creating EmployeeSchema 
var employeeSchema= new mongoose.Schema({
    branchid:String,
    groupid:String,
    sessionName:String,
    Exam:String,
    ExamId:Number,
    Display:String,
    Marks:Array,
    Writtenmaxno:Number,
    Vivamaxno:Number,
    Practicalmaxno:Number,
    Class:String,
    SubjectHead:String,
    Subject:String,
    StudentId:String,
    branchControl:Boolean

    
});

//Exporting Employee Schema
module.exports= mongoose.model("InternalExamData", employeeSchema);