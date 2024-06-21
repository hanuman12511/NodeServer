var mongoose=require("mongoose");

// Creating EmployeeSchema 
var employeeSchema= new mongoose.Schema({
    Class:String,
    Section:String,
    Subject:String,
    Teacher:String,
    RoomNo:String
});

//Exporting Employee Schema
module.exports= mongoose.model("ClassDetails", employeeSchema);