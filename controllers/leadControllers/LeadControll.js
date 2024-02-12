
const leadAdd=(req,res,next)=>{
    let resultdata=[]
    let len = Object.keys(req.body).length
    if(len){
      resultdata={success:true,message:" lead add successfully","length":1}
       
    }
    else{
        resultdata={success:true,message:" lead not add successfully","length":0}
    }
    res.json(resultdata)
}

module.exports={
    leadAdd
}