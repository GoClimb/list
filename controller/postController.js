const postModel = require('../model/postModel')


exports.index = async (req,res)=>{
    try {
        let data = await postModel.find()
        res.send({
            error:0,
            msg:'查询帖子成功',
            data
        })
    } catch (err) {
        console.log(err)
        res.send({
            error:1,
            msg:'查询帖子失败',
        })
    }
}

exports.create = async (req,res)=>{
    let {title,content} = req.body
    try {
        await postModel.create({
            title,
            content
        })
        res.send({
            error:0,
            msg:'帖子创建成功'
        })
    } catch (err) {
        console.log(error)
        res.send({
            error:1,
            msg:'帖子创建失败'
        })
    }
}

exports.remove = async (req,res)=>{
    let { _id } = req.parmas
    try{
        await postModel.deleteOne({ _id })
        res.send({
            error:0,
            msg:'删除帖子成功'
        })
    }catch(err){
        console.log(err)
        res.send({
            error:1,
            msg:'删除帖子失败'
        })
    }
      
}

exports.update = async (req,res)=>{
    let { _id } = req.parmas
    try{
       await postModel.updateOne({ _id },req.body)
       res.send({
           error:0,
           msg:'更新帖子成功'
       })
    }catch(err){
        console.log(err)
        res.send({
            error:1,
            msg:'更新帖子失败'
        })
    }
}