const jsonwebtoken = require('jsonwebtoken')

module.exports = (req,res,next) =>{
    let token = req.get('token')
    if(token){
        jsonwebtoken.verify(token,'Jynb',(err,data)=>{
            if(err){
                res.status(401).send('身份验证失败')
            }else{
                req.auth = data
                next()
            }
        })
    }else{
        res.status(401).send('请携带token')
    }
}