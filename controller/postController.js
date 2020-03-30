const postModel = require('../model/postModel')


exports.index = async (req,res)=>{
    //拿到前端传递到当前是第几页
    let pageNum = parseInt(req.query.pageNum) || 1
    //拿到前端传递到一页要显示多少条数据
    let pageSize = parseInt(req.query.pageSize) || 2
    let title = req.query.title

    let data = await postModel.find({
        title:new RegExp(title)
    }).skip( (pageNum-1) * pageSize ).limit(pageSize)

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

    let {title,content} = req.body
    await postModel.create({
        title,
        content
    })
    res.send({
        error:0,
        msg:'帖子创建成功'
    })
    
}

exports.remove = async (req,res)=>{
    
    let { _id } = req.parmas
    await postModel.deleteOne({ _id })
    res.send({
        error:0,
        msg:'删除帖子成功'
    })

}

exports.update = async (req,res)=>{

    let { _id } = req.parmas
    await postModel.updateOne({ _id },req.body)
    res.send({
        error:0,
        msg:'更新帖子成功'
    })

}

exports.show = async (req,res)=>{
    let {id} = req.params
    let data = await postModel.findOne({ _id:id })
    res.send({
        error:0,
        msg:'查询成功',
        data
    })
}