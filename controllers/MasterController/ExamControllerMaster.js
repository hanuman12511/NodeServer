
const InternalExam = require("../../models/InternalExam")
const MainExam = require("../../models/MainExam")
const addMainExam = require("../../models/addMainExam")

const mainExamApi= async(req,res,next)=>{
    let result=""
                let status= false


                console.log(req.body);
                if(req.body.Exam!==""){
                   await MainExam.find({branchid:req.body.branchid, Exam:req.body.exam,}).then(async(res)=>{
                       
                        if(res.length==0){
                            let resp = await MainExam.find({}).then((res)=>res)
                            if(resp.length>0){
                                let id = 0
                                resp.map(d=>{
                                    id=d.ExamId
                                })
                                 id++  
                                    const res = new MainExam({
                                        
                                        ExamId:id,
                                        sessionName:req.body.session,
                                        Exam:req.body.exam,
                                        Display:req.body.display,
                                        branchid:req.body.branchid,
                                        groupid:req.body.groupid,
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
                                else{
                                    const res = new MainExam({
                                        
                                        ExamId:1,
                                        sessionName:req.body.session,
                                        Exam:req.body.exam,
                                        Display:req.body.display,
                                        branchid:req.body.branchid,
                                        groupid:req.body.groupid,
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
                            result={success:false,message:"Exam already exits",status:200}
                        }
                })
                        
                    }
                    else{
                     result= {success:false,message:" pls insert Data",status:200}
                    }
                 
        res.json( result)
    }



    const internalExamApi= async(req,res,next)=>{
      
        let result=""
        console.log(req.body);
                    let status= false
                    if(req.body.Exam!==""){
                       await InternalExam.find({branchid:req.body.branchid, Exam:req.body.exam,}).then(async(res)=>{
                           
                            if(res.length==0){
                                let resp = await InternalExam.find({}).then((res)=>res)
                                if(resp.length>0){
                                    let id = 0
                                    resp.map(d=>{
                                        id=d.ExamId
                                    })
                                     id++  
                                        const res = new InternalExam({
                                            
                                            ExamId:id,
                                            sessionName:req.body.session,
                                            Exam:req.body.exam,
                                            Display:req.body.Display,
                                            branchid:req.body.branchid,
                                            groupid:req.body.groupid,
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
                                    else{
                                        const res = new InternalExam({
                                            
                                            ExamId:1,
                                            sessionName:req.body.session,
                                            Exam:req.body.exam,
                                            Display:req.body.Display,
                                            branchid:req.body.branchid,
                                            groupid:req.body.groupid,
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
                                result={success:false,message:"Exam already exits",status:200}
                            }
                    })
                            
                        }
                        else{
                         result= {success:false,message:" pls insert Data",status:200}
                        }
                     
            res.json( result)
        }  
        
        


    
const  getMainExamApi = async(req,res,next)=>{
    let resp = await MainExam.find({branchid:req.body.branchid}).then((res)=>res)
     let data=resp.filter(exam=>exam.branchControl==true)
    if(resp.length>0){
        result={success:true,message:"  get successfully",status:200,data:data}
    }
    else{
        result={success:false,message:"   not  get",status:200,data:resp}  
    }
    res.json(result)
}





const  getInternalExamApi = async(req,res,next)=>{
   
    let resp = await  InternalExam.find({branchid:req.body.branchid}).then((res)=>res)
    let data=resp.filter(exam=>exam.branchControl==true)
   if(resp.length>0){
       result={success:true,message:"  get successfully",status:200,data:data}
   }
   else{
       result={success:false,message:"   not  get",status:200,data:resp}  
   }
   res.json(result)
}
    


const getMainExamControlApi = async(req,res,next)=>{

    let result=""
    let status= false
    console.log(req.body);
    if(true){
          
        await MainExam.updateOne( 
                { branchid:req.body.branchid, ExamId:req.body.Examid,}, 
                {
                  $set: 
                            {
                       
                                branchControl:req.body.branchControl,
                       
                    }
                }, 
                { upsert: true }
              ).then((res)=>{
                 console.log("daat controll=>>",res);
                    status=true
                })
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


const getInternalExamControlApi = async(req,res,next)=>{

    let result=""
    let status= false
    console.log("data=>>",req.file);
    console.log("data=>>",req.body);
    if(true){
          
            let resp =  await InternalExam.updateOne( 
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




const getMainExamUpdateApi = async(req,res,next)=>{
    let result=""
    let status= false


    console.log("update main =>",req.body);
          await MainExam.updateOne({ branchid:req.body.branchid,ExamId:req.body.ExamId,groupid:req.body.groupid}, 
                {
                  $set: 
                     {
                       
                        Exam:req.body.exam,
                        Display:req.body.display,
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
                   
         
       
        
        
    res.json(result)  
}

const getInternalExamUpdateApi = async(req,res,next)=>{
    let result=""
    let status= false


    console.log("update inter  =>",req.body);
          await InternalExam.updateOne({ branchid:req.body.branchid,ExamId:req.body.ExamId,groupid:req.body.groupid}, 
                {
                  $set: 
                     {
                       
                        Exam:req.body.exam,
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
                   
         
       
        
        
    res.json(result)  
}
/** useless */

const MainExamMasterUpdateApi = async(req,res,next)=>{
    let result=""
    let status= false
    let resp1= await addMainExam.find({ ExamId:req.body.Examid,branchid:req.body.branchid}).then((res)=>res)
   
    if(Object.keys(resp1).length>=0){
           await addMainExam.updateOne({ branchid:req.body.branchid,  ExamId:req.body.Examid,groupid:req.body.groupid}, 
                {
                  $set: 
                     {
                       
                        ExamName:req.body.ExamName,
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

const InternalExamMasterUpdateApi = async(req,res,next)=>{
    let result=""
    let status= false
    let resp1= await MainExam.find({ ExamId:req.body.Examid,branchid:req.body.branchid}).then((res)=>res)
    console.log(Object.keys(resp1).length);
    if(Object.keys(resp1).length>=0){
    
          
           await MainExam.updateOne({ branchid:req.body.branchid,  ExamId:req.body.Examid,groupid:req.body.groupid}, 
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
    mainExamApi,
internalExamApi,
getMainExamApi,
getMainExamControlApi,
getInternalExamControlApi,
getMainExamUpdateApi,
getInternalExamUpdateApi,
getInternalExamApi,
MainExamMasterUpdateApi,
InternalExamMasterUpdateApi,

}