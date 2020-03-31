let userModel = require('../model/userModel')

exports.register = async (req,res)=>{
    await userModel.create(req.body)
    res.send({
        error:0,
        msg:'注册成功!'
    })
}

exports.login = (req,res)=>{
    
}