var mongoose=require("mongoose");

// Creating EmployeeSchema 
var employeeSchema= new mongoose.Schema({
    SubjectHead:String,
    Subjects:String
});

//Exporting Employee Schema
module.exports= mongoose.model("SubjectToHead", employeeSchema);