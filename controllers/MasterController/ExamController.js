

const MainExamData = require("./MainExamModul")
const InternalExamData = require("./InterExamModul")
const Class = require("../../models/Class")
const SubjectToHead = require("../../models/SubjectToHead")
const MainExam = require("../../models/MainExam")
const SubjectHead = require("../../models/SubjectHead")
const InternalExam = require("../../models/InternalExam")
const ClassDetails = require("../../models/ClassDetails")

const mainExamDataApi= async(req,res,next)=>{
    let result=""
                let status= false
                if(req.body.Exam!==""){
                   await MainExamData.find({ Subject:req.body.subject,branchid:req.body.branchid, Class:req.body.classname,Exam:req.body.examname}).then(async(res)=>{
                       
                        if(res.length==0){
                            let resp = await MainExamData.find({branchid:req.body.branchid,}).then((res)=>res)
                            if(resp.length>0){
                                let id = 0
                                resp.map(d=>{
                                    id=d.ExamId
                                })
                                 id++  
                                    const res = new MainExamData({
                                        
                                        ExamId:id,
                                        sessionName:req.body.session,
                                        Exam:req.body.examname,
                                        Display:req.body.Display,
                                        branchid:req.body.branchid,
                                        groupid:req.body.groupid,
                                        branchControl:true,
                                        Marks:req.body.marks,
                                        Writtenmaxno:req.body.written,
                                        Vivamaxno:req.body.viva,
                                        Practicalmaxno:req.body.practical,
                                        Class:req.body.classname,
                                        SubjectHead:req.body.subjecthead,
                                        Subject:req.body.subject,
                                        Marks:req.body. Studentlist,
                                       
                             });
                                res.save();
                              
                                if(Object.keys(res).length>0){
                                    result={success:true,message:" student marks Add successfully",status:200}
                                }
                                else{
                                    result={success:false,message:"not create",status:200}  
                                }
                                }
                                else{
                                    const res = new MainExamData({
                                        
                                        ExamId:1,
                                        sessionName:req.body.session,
                                        Exam:req.body.examname,
                                        Display:req.body.Display,
                                        branchid:req.body.branchid,
                                        groupid:req.body.groupid,
                                        branchControl:true,
                                        Marks:req.body.marks,
                                        Writtenmaxno:req.body.written,
                                        Vivamaxno:req.body.viva,
                                        Practicalmaxno:req.body.practical,
                                        Class:req.body.classname,
                                        SubjectHead:req.body.subjecthead,
                                        Subject:req.body.subject,
                                        Marks:req.body. Studentlist,
                                       
                                        
                                    });
                                res.save();
                               
                                if(Object.keys(res).length>0){
                                    result={success:true,message:"  create  successfully",status:200}
                                }
                                else{
                                    result={success:false,message:"not create",status:200}  
                                }
                            }
                        }
                        else{
                            result={success:false,message:"marks already exits",status:200}
                        }
                })
                        
                    }
                    else{
                     result= {success:false,message:" pls insert Data",status:200}
                    }
                 
        res.json( result)
    }






    const internalExamDataApi= async(req,res,next)=>{
       
        let result=""
        let status= false
        if(req.body.Exam!==""){
           await  InternalExamData.find({ Subject:req.body.subject,branchid:req.body.branchid, Class:req.body.classname, Exam:req.body.examname}).then(async(res)=>{
               
                if(res.length==0){
                    let resp = await  InternalExamData.find({}).then((res)=>res)
                    if(resp.length>0){
                        let id = 0
                        resp.map(d=>{
                            id=d.ExamId
                        })
                         id++  
                            const res = new  InternalExamData({
                                
                                ExamId:id,
                                sessionName:req.body.session,
                                Exam:req.body.examname,
                                Display:req.body.Display,
                                branchid:req.body.branchid,
                                groupid:req.body.groupid,
                                branchControl:true,
                                Marks:req.body.marks,
                                Writtenmaxno:req.body.written,
                                Vivamaxno:req.body.viva,
                                Practicalmaxno:req.body.Practicalmaxno,
                                Class:req.body.classname,
                                SubjectHead:req.body.subjecthead,
                                Subject:req.body.subject,
                                Marks:req.body. Studentlist,
                                branchControl:true
                     });
                        res.save();
                      
                        if(Object.keys(res).length>0){
                            result={success:true,message:" student marks Add successfully",status:200}
                        }
                        else{
                            result={success:false,message:"not create",status:200}  
                        }
                        }
                        else{
                            const res = new  InternalExamData({
                                
                                ExamId:1,
                                sessionName:req.body.session,
                                Exam:req.body.examname,
                                Display:req.body.Display,
                                branchid:req.body.branchid,
                                groupid:req.body.groupid,
                                branchControl:true,
                                Marks:req.body.marks,
                                Writtenmaxno:req.body.written,
                                Vivamaxno:req.body.viva,
                                Practicalmaxno:req.body.Practicalmaxno,
                                Class:req.body.classname,
                                SubjectHead:req.body.subjecthead,
                                Subject:req.body.subject,
                                Marks:req.body. Studentlist,
                                branchControl:true
                                
                            });
                        res.save();
                       
                        if(Object.keys(res).length>0){
                            result={success:true,message:"  create  successfully",status:200}
                        }
                        else{
                            result={success:false,message:"not create",status:200}  
                        }
                    }
                }
                else{
                    result={success:false,message:"Exam marks already exits",status:200}
                }
        })
                
            }
            else{
             result= {success:false,message:" pls insert Data",status:200}
            }
         
res.json( result)
        }  
        
  
const   getStudentMainExamMarksBySubjectApi = async(req,res,next)=>{
    /* branchid:bid,sessionId,classid,subjectid,examid */
    console.log(req.body);
    let resp = await MainExamData.find({branchid:req.body.branchid,sessionName:req.body.sessionId,Exam:req.body.examid,
        Class :req.body.classid,
         Subject:req.body.subjectid
        }).then((res)=>res)


    /* let classd = await ClassDetails.find({branchid:req.body.branchid}).then((res)=>res)
    let subjecthead1 = await SubjectToHead.find({branchId:req.body.branchid}).then((res)=>res)
    let subjecthead = await SubjectHead.find({branchId:req.body.branchid}).then((res)=>res)
    let exam1 = await MainExam.find({branchid:req.body.branchid}).then((res)=>res) */
   /* 
    let dataf = []
    resp.map(d=>{
        let data = []
        exam1.map(ex=>{
            if(d.Exam==ex.ExamId){
                data.push({exam:ex.Exam})
            }
        })
        classd.map(cl=>{
            if(d.Class==cl.classDetailId)
            data.push({classname:cl.classsection})
        })
        
        subjecthead1.map(sh=>{
            if(d.SubjectHead==sh.SubjectHead){
                subjecthead.map(shs=>{
                    if(sh.SubjectHead==shs.subjectHeadId){
                        data.push({SubjectHead:shs.SubjectHead})
                    }
                })
          
                sh.Subjects.map(sub=>{
                    if(sub.id==d.Subject){
                        data.push({"subject":sub.subect})
                    }
                })
            }
        })
    console.log(data);
if(data.length>0){
        dataf.push({...d. _doc,exam:data[0].exam,classname:data[1].classname,subjecthead:data[2].SubjectHead,subject:data[3].subject})
}
    }) */

 /*    console.log("daat fibal=>>>",dataf); */
    if(resp.length>0){
        result={success:true,message:"  get successfully",status:200,data:resp}
    }
    else{
        result={success:false,message:"   not  get",status:200,data:resp}  
    }
    res.json(result)
}
       

    
    
const  getMainExamDataApi = async(req,res,next)=>{
    console.log(req.body);
    let resp = await MainExamData.find({branchid:req.body.branchid}).then((res)=>res)
    let classd = await ClassDetails.find({branchid:req.body.branchid}).then((res)=>res)
    let subjecthead1 = await SubjectToHead.find({branchId:req.body.branchid}).then((res)=>res)
    let subjecthead = await SubjectHead.find({branchId:req.body.branchid}).then((res)=>res)
    let exam1 = await MainExam.find({branchid:req.body.branchid}).then((res)=>res)
   
    let dataf = []
    resp.map(d=>{
        let data = []
        exam1.map(ex=>{
            if(d.Exam==ex.ExamId){
                data.push({exam:ex.Exam})
            }
        })
        classd.map(cl=>{
            if(d.Class==cl.classDetailId)
            data.push({classname:cl.classsection})
        })
        
        subjecthead1.map(sh=>{
            if(d.SubjectHead==sh.SubjectHead){
                subjecthead.map(shs=>{
                    if(sh.SubjectHead==shs.subjectHeadId){
                        data.push({SubjectHead:shs.SubjectHead})
                    }
                })
          
                sh.Subjects.map(sub=>{
                    if(sub.id==d.Subject){
                        data.push({"subject":sub.subect})
                    }
                })
            }
        })
    console.log(data);
if(data.length>0){
        dataf.push({...d. _doc,exam:data[0].exam,classname:data[1].classname,subjecthead:data[2].SubjectHead,subject:data[3].subject})
}
    })

    console.log("daat fibal=>>>",dataf);
    if(resp.length>0){
        result={success:true,message:"  get successfully",status:200,data:dataf}
    }
    else{
        result={success:false,message:"   not  get",status:200,data:resp}  
    }
    res.json(result)
}



const  getInternalExamDataApi = async(req,res,next)=>{
   
    let resp = await InternalExamData.find({branchid:req.body.branchid}).then((res)=>res)
    let classd = await Class.find({branchid:req.body.branchid}).then((res)=>res)
    let subject = await SubjectToHead.find({}).then((res)=>res)
    let subjecthead = await SubjectHead.find({}).then((res)=>res)
    let exam1 = await InternalExam.find({branchid:req.body.branchid}).then((res)=>res)
   
    let dataf = []
    resp.map(d=>{
        let data = []
        exam1.map(ex=>{
            if(d.Exam==ex.ExamId){
                data.push({exam:ex.Exam})
            }
        })
        classd.map(cl=>{
            if(d.Class==cl.classId)
            data.push({classname:cl.Class})
        })
        
        subjecthead.map(sh=>{
            if(d.SubjectHead==sh.subjectHeadId)
            data.push({SubjectHead:sh.SubjectHead})
        })
        dataf.push({exam:data[0].exam,classname:data[1].classname,subjecthead:data[2].SubjectHead})

    })

    console.log("daat fibal=>>>",dataf);
    if(resp.length>0){
        result={success:true,message:"  get successfully",status:200,data:dataf}
    }
    else{
        result={success:false,message:"   not  get",status:200,data:resp}  
    }
    res.json(result)
}
    


const getMainExamDataControlApi = async(req,res,next)=>{

    let result=""
    let status= false
    console.log("data=>>",req.file);
    console.log("data=>>",req.body);
    if(true){
          
            let resp =  await MainExamData.updateOne( 
                { branchid:req.body.branchid, ExamId:req.body.Examid,}, 
                {
                  $set: 
                            {
                       
                                branchControl:req.body.branchControl,
                       
                    }
                }, 
                { upsert: true }
              ).then((res)=>res)
                  console.log(res);
                    status=true
        
                
        }
        else{
         result= {success:false,message:" pls insert Data",status:200}
        }
        if(status){
            result={success:true,message:"  control update successfully",status:200}
        }
        else{
            result={success:false,message:"control update not ",status:200}  
        }
        
    res.json(result)  
}


const getInternalExamDataControlApi = async(req,res,next)=>{

    let result=""
    let status= false
    console.log("data=>>",req.file);
    console.log("data=>>",req.body);
    if(true){
          
            let resp =  await InternalExamData.updateOne( 
                { branchid:req.body.branchid, ExamId:req.body.Examid,}, 
                {
                  $set: 
                            {
                       
                                branchControl:req.body.branchControl,
                       
                    }
                }, 
                { upsert: true }
              ).then((res)=>res)
                  console.log(res);
                    status=true
        
                
        }
        else{
         result= {success:false,message:" pls insert Data",status:200}
        }
        if(status){
            result={success:true,message:"  control update successfully",status:200}
        }
        else{
            result={success:false,message:"control update not ",status:200}  
        }
        
    res.json(result)  
}




const getMainExamDataUpdateApi = async(req,res,next)=>{
    console.log(req.body);
    let result=""
    let status= false
    let resp1= await MainExamData.find({ ExamId:req.body.ExamId,branchid:req.body.branchid}).then((res)=>res)
    console.log(Object.keys(resp1).length);
    if(Object.keys(resp1).length>0){
    
          
           await MainExamData.updateOne({ branchid:req.body.branchid,  ExamId:req.body.ExamId,groupid:req.body.groupid}, 
                {
                  $set: 
                     {
                       
                                Exam:req.body.examname,
                                Display:req.body.Display,
                                Marks:req.body.marks,
                                Writtenmaxno:req.body.written,
                                Vivamaxno:req.body.viva,
                                Practicalmaxno:req.body.Practicalmaxno,
                                Class:req.body.classname,
                                SubjectHead:req.body.subjecthead,
                                Subject:req.body.subject,
                                Marks:req.body. Studentlist,
                                branchControl:true
                       }
                }, 
                { upsert: true }
              ).then((res)=>res).then((data)=>{
                console.log(data);
                status=true
                if(data.modifiedCount>0){
                    result={success:true,message:" update successfully",status:200}
                }
                else{
                    result={success:false,message:" update not ",status:200}  
                }
              })
                   
         }
        else{
         result= {success:false,message:" pls change Data",status:200}
        }
        
        
    res.json(result)  
}

const getInternalExamDataUpdateApi = async(req,res,next)=>{
    let result=""
    let status= false
    let resp1= await InternalExamData.find({ ExamId:req.body.Examid,branchid:req.body.branchid}).then((res)=>res)
    console.log(Object.keys(resp1).length);
    if(Object.keys(resp1).length>=0){
    
          
           await MainExamData.updateOne({ branchid:req.body.branchid,  ExamId:req.body.Examid,groupid:req.body.groupid}, 
                {
                  $set: 
                     {
                       
                        Exam:req.body.Exam,
                        Display:req.body.Display,
                       }
                }, 
                { upsert: true }
              ).then((res)=>res).then((data)=>{
                console.log(data);
                status=true
                if(data.modifiedCount>0){
                    result={success:true,message:" update successfully",status:200}
                }
                else{
                    result={success:false,message:" update not ",status:200}  
                }
              })
                   
         }
        else{
         result= {success:false,message:" pls change Data",status:200}
        }
        
        
    res.json(result)  
}



module.exports={
    mainExamDataApi,
internalExamDataApi,
getMainExamDataApi,
getMainExamDataControlApi,
getInternalExamDataControlApi,
getMainExamDataUpdateApi,
getInternalExamDataUpdateApi,
getInternalExamDataApi,
getStudentMainExamMarksBySubjectApi
}