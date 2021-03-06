const express = require('express')
require('dotenv').config()
require('express-async-errors')
let app = express()

app.use(express.json())
app.use(express.urlencoded( { extended: true  }))

app.use(express.static('./public'))

app.use('/posts',require('./route/postRouter'))
app.use(require('./route/userRouter'))

app.use((err,req,res,next)=>{
    console.error(err)
    res.send(err.message)
})


app.listen(3000,()=>{
    console.log('服务开始监听...')
})