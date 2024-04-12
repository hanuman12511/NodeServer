const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    name: String,
    phone: String,
    status:[
        {
            cureentStatus:String,
            fresh:String,
            active:[String,String,String],
            Closed:[String,String]
        }
    ],
    rating:Number,
    acquired:Date
   });

   module.exports = mongoose.model("lead", userSchema)