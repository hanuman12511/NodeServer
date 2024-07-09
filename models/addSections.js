var mongoose=require("mongoose");

// Creating EmployeeSchema 
var employeeSchema= new mongoose.Schema({
    branchid:Number,
    groupid:Number,
    sectionId:Number,
    SectionName:String,
    branchControl:Boolean ,
});

//Exporting Employee Schema
module.exports= mongoose.model("addSection", employeeSchema);