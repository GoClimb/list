const mongoose = require('../config/db')

let schema = new mongoose.Schema({
    title:{
        type:String
    },

    content:{
        type:String
    }
    
},{
    timestamps:true
})

module.exports = mongoose.model('post',schema)