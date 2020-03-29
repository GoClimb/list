const mongoose = require('mongoose')

let url = 'mongodb://localhost:27017/post'

mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    res.send({
        error:0,
        msg:'数据库连接成功'
    })
}).catch((err)=>{
    console.log(err)
    res.send({
        error:1,
        msg:'数据库连接失败'
    })
})

module.exports = mongoose
