/* const leadData = require("../../models/Lead")   



const LeadAddWithfile=(req,res)=>{
    
}
const leadView=async(req,res,next)=>{
    console.log(req.query);
    res.json(req.query)
    next()
}
const leadShow=async(req,res)=>{
   
    let resultdata=[]
    let leaddata=await leadData.find({}).then((user)=>{return user })
    if(Object.keys(leaddata).length>0){
        resultdata={success:true,message:" lead show  succussfully   ","length":1,"status":leaddata}
 
    }
    else{
        resultdata={success:false,message:" empty data succussfully   ","length":0,"status":leaddata}
       
    }
       res.json(resultdata)
}

const leadStatusUpadate= async(req,res)=>{
    let resultdata=[]

   
    
    let len = Object.keys(req.body).length
    if(len){
        let status = req.body.status
        let id = req.body.id
        
      
        const filter = { _id: id };
        const update = { cureentStatus: status};
       let leaddata=await leadData.findOneAndUpdate({ _id: id,status:[update]}).then((user)=> {return user})
     
       console.log(leaddata);
        resultdata={success:true,message:" lead status update succussfully   ","length":1,"status":leaddata}
    }
    else{
        resultdata={success:false,message:" lead status not update    ","length":0}
    } 
    res.json(resultdata)
}




const leadDelete= async(req,res)=>{
    let resultdata=[]
    
    let len = Object.keys(req.body).length
    if(len){
        let id = req.body.id
        let leaddata=await leadData.findOneAndDelete({ _id: id }).then((data)=> {return data})
          console.log(leaddata);
        resultdata={success:true,message:" lead delete succussfully   ","length":1,"status":leaddata}
    }
    else{
        resultdata={success:false,message:" lead not delete    ","length":0}
    }
    res.json(resultdata)
}



const leadAdd= async(req,res,next)=>{
    let resultdata=[]
    let len = Object.keys(req.body).length
    if(len){
        if(req.body.email!='' && req.body.password!='' ){
            let user = await leadData.findOne({phone:req.body.phone}).then((user)=> {return user})
            if(user){   
                resultdata={success:false,message:" lead exits   ","length":0}
        }else{
           
            const user = new leadData({
                name: req.body.name,
                phone: req.body.phone,
                rating:0,
                status:[
                    {
                        cureentStatus:"Fresh",
                        fresh:"Fresh",
                        active:["Just Curious","Interested","Hot"],
                        Closed:["Won","Lost"]
                    }
                    ],
                acquired:new Date(),
                
            });
            user.save(); 
            resultdata={success:true,message:" lead successfully","length":1}
        }
    }
}   
    res.json(resultdata)
}
    
module.exports={
    leadAdd,
    leadStatusUpadate,
    leadShow,
    leadDelete,
    leadView
} */