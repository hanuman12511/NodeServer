var mongoose=require("mongoose");

// Creating EmployeeSchema 
var employeeSchema= new mongoose.Schema({
    branchId:Number,
    groupId:String,
    name:String,
    institutename:String,
    affiliation:String,
    affiliated:String,
    medium:String,
    phone:String,
    email:String,
    password:String,
    mobile:String,
    contactperson:String,
    Address:String,
    registerno:String,
    established:String,
    website:String,
    logo:String,
    status:String,
    branchControl:String
});

//Exporting Employee Schema
module.exports= mongoose.model("addBranch", employeeSchema);