var mongoose=require("mongoose");

// Creating EmployeeSchema 
var employeeSchema= new mongoose.Schema({
    HolidayName:String,
    FromDate:String,
    ToDate:String
});

//Exporting Employee Schema
module.exports= mongoose.model("addHolidayList", employeeSchema);