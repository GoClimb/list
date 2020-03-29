const express = require('express')
const {index,create,remove,update} = require('../controller/postController')

let router = express.Router()

//查询贴子路由接口
router.get('/',index)

//创建贴子路由接口
router.post('/',create)

//删除贴子路由接口
router.delete('/:id',remove)

//修改贴子路由接口
router.update('/:id',update)


module.exports = router