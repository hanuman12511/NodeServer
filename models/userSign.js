const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    phone: String,   });
   

module.exports = mongoose.model("usersign", userSchema)