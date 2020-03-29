const express = require('express')

let app = express()

app.use(express.json())
app.use(express.urlencoded( { extends:true }))

app.use('/posts',require('./route/postRouter'))


app.listen(3000,()=>{
    console.log('服务开始监听...')
})