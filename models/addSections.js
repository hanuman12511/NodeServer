var mongoose=require("mongoose");

// Creating EmployeeSchema 
var employeeSchema= new mongoose.Schema({
    sectionId:Number,
    SectionName:String,
    Displayorder:String
});

//Exporting Employee Schema
module.exports= mongoose.model("addSection", employeeSchema);