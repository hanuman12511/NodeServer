var mongoose=require("mongoose");

// Creating EmployeeSchema 
var employeeSchema= new mongoose.Schema({
    groupName:String,
    branchId:Number,
    groupId:String,
    groupStatus:String,
    adminemail:String,
    branchname:String,
    institutename:String,
    affiliation:String,
    affiliated:String,
    medium:String,
    phone:String,
    branchemail:String,
    password:String,
    username:String,
    mobile:String,
    contactperson:String,
    Address:String,
    registerno:String,
    established:String,
    website:String,
    logo:String,
    status:String,
    branchControl:String,
    otp:Number
});

//Exporting Employee Schema
module.exports= mongoose.model("addBranch", employeeSchema);