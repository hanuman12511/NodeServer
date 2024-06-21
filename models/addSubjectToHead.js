var mongoose=require("mongoose");

// Creating EmployeeSchema 
var employeeSchema= new mongoose.Schema({
    SubjectHead:String
});

//Exporting Employee Schema
module.exports= mongoose.model("addSubjectToHead", employeeSchema);