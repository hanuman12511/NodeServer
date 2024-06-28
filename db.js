function Connection(db){
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://hanuplusitsolution:o8IJY8a7hlKrcJX2@cluster0.wzwpge2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/"+db, {useNewUrlParser: true})
}
module.exports={Connection}