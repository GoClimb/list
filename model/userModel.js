const mongoose = require('../config/db')
const bcryptjs = require('bcryptjs')

let schema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        validate:{
            validator(v){
                return /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(v)
            },
            message:'请输入正确的邮箱地址'
        }
    },
    password:{
        type:String,
        required:true
    },
    nickname:{
        type:String,
        default:'帖子用户778'
    }
},{
    timestamps:true
})

schema.pre('save',function(next){
    this.password = bcryptjs.hashSync(this.password,10)
    
    next()
})

module.exports = mongoose.model('user',schema)