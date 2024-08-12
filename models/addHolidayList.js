var mongoose=require("mongoose");

// Creating EmployeeSchema 
var employeeSchema= new mongoose.Schema({
    holidayId:Number,
    branchId:Number,
    groupId:String,
    sessionId:String,
    startdate:String,
    enddate:String,
     title:String,
    description: String,
    filename: String,
    
   
});

//Exporting Employee Schema
module.exports= mongoose.model("addHolidayList", employeeSchema);