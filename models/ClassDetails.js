var mongoose=require("mongoose");

// Creating EmployeeSchema 
var employeeSchema= new mongoose.Schema({
    classDetailId:Number,
    Class:String,
    Section:String,
    Subject:String,
    Teacher:String,
    RoomNo:String,
    TuitionFee:Number,
    AdmissionFee:Number,
});

//Exporting Employee Schema
module.exports= mongoose.model("ClassDetails", employeeSchema);