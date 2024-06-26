var mongoose=require("mongoose");

// Creating EmployeeSchema 
var employeeSchema= new mongoose.Schema({
    classDetailId:Number,
    ClassId:String,
    SectionId:String,
    SubjectId:String,
    TeacherId:String,
    RoomNo:String,
    TuitionFee:Number,
    AdmissionFee:Number,
    branchid:String,
    groupid:String,
});

//Exporting Employee Schema
module.exports= mongoose.model("ClassDetails", employeeSchema);