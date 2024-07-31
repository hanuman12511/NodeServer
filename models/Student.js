const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({ 
  branchId:Number,
  groupId:String,
  sessionName:String,
  studentsId:Number,
  RegistrationEnrollNo:{
    type: String,
    unique: true,
    required: [true, "Please enter record id!"],
    },	
  RegiterPageNo:String,	
  FirstName:String,	
  LastName:String,	
  FName:String,
  MotherName:String,
  MobileNo:String,
  EmailID:String,
  DOB:String,
  Gender:String,
  Category:String,
  Phyical:String,
  CAddress:String,
  CArea:String,
  CPincode:String,
  CCity:String,
  CState:String, 
  CCountry:String,	
  PAddress:String,	
  PArea:String,	
  PPincode:String,
  PCity:String,
  PState:String, 
  PCountry:String,
  previousclassname:String,
  ClassSection:String,
  AdmissionDate:String,
  RTE:String,
  Schoolname:String,	
  SRNo:String,
  Root:String,
  Stand:String,	
  Fare:String,
  PreviousDueFees:String, 
  status:String,
  otp:Number,
  PreviousDueFees:String

});
   

module.exports = mongoose.model("Student", userSchema)