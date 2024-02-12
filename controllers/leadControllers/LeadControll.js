const leadData = require("../../models/Lead")   
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
    leadAdd
}