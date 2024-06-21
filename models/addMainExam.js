var mongoose=require("mongoose");

// Creating EmployeeSchema 
var employeeSchema= new mongoose.Schema({
    ExamName:String,
    DisplayOrder:String
});

//Exporting Employee Schema
module.exports= mongoose.model("addMainExam", employeeSchema);