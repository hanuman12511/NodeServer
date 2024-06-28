var mongoose=require("mongoose");

// Creating EmployeeSchema 
var employeeSchema= new mongoose.Schema({
    branchId:Number,
    groupId:String,
    subjecttoHeadId:Number,
    SubjectHead:String,
    Subjects:Array
});

//Exporting Employee Schema
module.exports= mongoose.model("SubjectToHead", employeeSchema);