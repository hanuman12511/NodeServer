var mongoose=require("mongoose");

// Creating EmployeeSchema 
var employeeSchema= new mongoose.Schema({
    classDetailId:Number,
    ClassId:String,
    SectionId:String,
    SubjectId:Array,
    TeacherId:String,
    RoomNo:String,
    branchid:String,
    groupid:String,
    feeDetails:Array,
    classsection:String
    
});

//Exporting Employee Schema
module.exports= mongoose.model("ClassDetails", employeeSchema);