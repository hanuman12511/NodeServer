const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({ 
    studentid:Number,
    firstname:String,
    lastname:String,
     fathername:String,
     mothername:String,
    email:String,
     dob:String,
     gender:String,
     physical:String,
     category:String,
     passowrd:String,
     mobile:String,
     address:String,
     area:String,
     pin:String,
     city:String,
     state:String,
     country:String,
     paddress:String,
      parea:String,
     ppin:String,
     pcity:String,
     pstate:String,
     pcountry:String,
    previousschoolname:String,
      srno:String,
      previousclassname:String,
      registerpageno:String,
      registrationenrollno:String,
      classsection:String,
       admissiondate:String,
      root:String,
      stand:String,
      fare:String,
      status:String,
      otp:String

});
   

module.exports = mongoose.model("Student", userSchema)