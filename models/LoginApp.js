var mongoose=require("mongoose");

// Creating EmployeeSchema 
var employeeSchema= new mongoose.Schema({
    loginId:Number,
    groupId:String,
    branchId:String,
    mobile:String,
    status:String,
    email:String,
    passord:String,
    otp:Number,
    employeeId:String,
    branchControl:Boolean

});

//Exporting Employee Schema
module.exports= mongoose.model("loginApp", employeeSchema);