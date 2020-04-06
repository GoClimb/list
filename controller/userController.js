const userModel = require('../model/userModel')
const fs = require('fs')
const path = require('path')
let jsonwebtoken = require('jsonwebtoken')


exports.getInfo = async (req,res)=>{
    let { id } = req.auth
    let data = await userModel.findOne({ _id:id },{password:0})

    if(!data){
        res.send({
            error:1,
            msg:'查询失败'
        })
    }else{
        res.send({
            error:0,
            msg:'查询成功',
            data
        })
    }
}

exports.register = async (req,res)=>{
    
    let { email,nickname } = req.body
    let data = await userModel.findOne({ email })
    let user_nickname = await userModel.findOne({ nickname })

    if(data){
        res.send({
            error:1,
            msg:'邮箱已存在'
        })
        
    }else if(user_nickname){
        res.send({
            error:1,
            msg:'昵称已存在'
        })

    }else{
        await userModel.create(req.body)
        res.send({
            error:0,
            msg:'注册成功!'
        })
    }
}

exports.login = async (req,res)=>{
    
    let { email,password } = req.body

    let data = await userModel.findOne( {email} )

    if(!data){
        res.send({
            error:1,
            msg:'账户不存在'
        })
        return
    }
    if(!data.comparePassword(password)){
        res.send({
            error:1,
            msg:'邮箱或密码错误'
        })
        return
    }

    let token = jsonwebtoken.sign({
        id:data._id,
        nickname:data.nickname
    },
    'Jynb',
    {
        expiresIn:'2h'
    })
    res.send({
        error:0,
        msg:'登陆成功',
        token
    })
       
    
}

exports.update = async (req,res)=>{
    let { id } = req.auth
    let obj = {}
    if(req.file.path){
        let newFileName = `${req.file.filename}-${req.file.originalname}`
        let newFilePath = path.resolve('./public/headPortrait',newFileName)
        let data = fs.readFileSync(req.file.path)
        fs.writeFileSync(newFilePath,data)
        obj.headPortrait = `${process.env.BASEURL}/headPortrait/${newFileName}`
    }
    await userModel.updateOne({ _id:id },obj)
    let data = await userModel.findOne({_id:id})
    res.send({
        error:0,
        msg:'更新成功',
        data
    })
    
    
    
}

