require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.TokenVerify = (req) => {
return new Promise((resolve,reject)=>{
    if(req.headers && req.headers.authorization){
        let decode
        try{
            decode = jwt.verify(req.headers.authorization, process.env.TOKEN_KEY)
        }catch(e){
            reject ("token not valid")
            return
        }
        let mobile = decode.id
        resolve(mobile)
    }
    else{
        reject("not")
    }

})

};