var mongoose=require("mongoose");

// Creating EmployeeSchema 
var employeeSchema= new mongoose.Schema({
    HolidayName:String,
    FromDate:String,
    ToDate:String,
    CreatedOn:String
});

//Exporting Employee Schema
module.exports= mongoose.model("HolidayList", employeeSchema);