const students= async(req,res,next)=>{
    res.json("students info")
    console.log("req.body.phone",req.body.phone);
    let resultdata=[]
    let len = Object.keys(req.body).length
    if(len){
        if(req.body.phone!='' ){
            let user = await userData1.findOne({phone:req.body.phone}).then((user)=> {return user})
            if(user){   
                resultdata={success:true,message:" user register  successfully","length":1,"data":req.body}
        }else{
           
            const user = new userData1({
                phone: req.body.phone,
            });
            user.save(); 
            resultdata={success:true,message:" user register  successfully","length":1,"data":req.body}
        }       
        }
        else{
            resultdata={success:false,message:"pls enter phone","length":1}
        }
    }
    else{
        resultdata={success:false,message:"user  not register  successfully","length":0}
    }
   // res.send(resultdata)
   res.json(resultdata)
}

const studentsFee= async(req,res,next)=>{

    res.json("students Fee")
}

const displayStudentsClassBy= async(req,res,next)=>{

    res.json("students Display Class by")
}

const allStudentDisplay= async(req,res,next)=>{

    res.json("students all display info")
}

const studentAttendance= async(req,res,next)=>{

    res.json("students attendanceinfo")
}

module.exports={
    students,
    allStudentDisplay,
    displayStudentsClassBy,
    studentAttendance,
    studentsFee
}