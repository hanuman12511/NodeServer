var mongoose=require("mongoose");

// Creating EmployeeSchema 
var employeeSchema= new mongoose.Schema({
    StationName:String,
    DistanceKm:String,
    Fare:String,
    Detail:String,
    Display:String
});

//Exporting Employee Schema
module.exports= mongoose.model("BusStations", employeeSchema);