var mongoose=require("mongoose");

// Creating EmployeeSchema 
var employeeSchema= new mongoose.Schema({
    branchId:Number,
    groupId:String,
    sessionId:String,
    employeeId:Number,
    departmentName:String,
    firstName:String,
    lastName:String,
     fatherName:String,
    motherName:String,
    email:String,
   dob:String,
     gender:String,
    mobile:String,
     maritialstatus:String,
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
     status:String,
     otp:String,
     idproofdrop:String,
idproof:String,
addressidproof:String,
addressidproofdrop:String,
qualification:String,
experience:String,
referece:String,
bankname:String,
bankacno:String,
bankifsc:String,
bankaddress:String,
joindate:String,
salary:String,
periods:String,
paidleave:String,
intime:String,
outtime:String,
image:String

});

//Exporting Employee Schema
module.exports= mongoose.model("addEmployee", employeeSchema);