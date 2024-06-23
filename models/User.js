const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    
    adminemail:String,
    password: String,
    name:String,
    institutename:String,
    affiliation:String,
    affiliated:String,
    medium:String,
    phone:String,
    branchemail:String,
    mobile:String,
    contactperson:String,
    address:String,
    registerno:String,
    established:String,
    website:String,
    status:String,
    otp:String
   });
   

module.exports = mongoose.model("user", userSchema)