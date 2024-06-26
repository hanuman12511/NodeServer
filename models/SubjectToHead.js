var mongoose=require("mongoose");

// Creating EmployeeSchema 
var employeeSchema= new mongoose.Schema({
    branchId:Number,
    groupId:String,
    subjecttoHeadId:Number,
    SubjectHead:String,
    Subjects:String
});

//Exporting Employee Schema
module.exports= mongoose.model("SubjectToHead", employeeSchema);