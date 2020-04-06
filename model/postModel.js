const mongoose = require('../config/db')

let schema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    userId:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"user", 
        required:true
    }
    
},{
    timestamps:true
})

module.exports = mongoose.model('post',schema)