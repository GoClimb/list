const postModel = require('../model/postModel')


exports.index = async (req,res)=>{

    let pageNum = parseInt(req.query.pageNum) || 1

    let pageSize = parseInt(req.query.pageSize) || 2
    
    let title = req.query.title

    let data = await postModel.find({
        title:new RegExp(title)
    }).populate('userId',['nickname']).skip( (pageNum-1) * pageSize ).limit(pageSize)

    let totalNum = await postModel.find({
        title:new RegExp(title)
    }).countDocuments()
    
    let totalPage  = Math.ceil(totalNum / pageSize)

    res.send({
        error:0,
        msg:'查询帖子成功',
        list:data,
        totalPage
    })
}

exports.create = async (req,res)=>{
    req.body.userId = req.auth.id

    await postModel.create(req.body)

    res.send({
        error:0,
        msg:'帖子创建成功'
    })
    
}

exports.remove = async (req,res)=>{
    let { id } = req.params

    await postModel.deleteOne({ _id:id })
    res.send({
        error:0,
        msg:'删除帖子成功',
    })

}

exports.update = async (req,res)=>{

    let {id} = req.params

    await postModel.updateOne({ _id:id },req.body)
    
    const data = await postModel.findOne({_id:id})
    res.send({
        error:0,
        msg:'更新帖子成功',
        data
    })

}

exports.show = async (req,res)=>{
    let {id} = req.params
    
    let data = await postModel.findOne({ _id:id }).populate('userId',['nickname'])
    res.send({
        error:0,
        msg:'查询成功',
        data
    })
}