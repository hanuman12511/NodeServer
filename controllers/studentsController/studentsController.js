const students= async(req,res,next)=>{

    res.json("students info")
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