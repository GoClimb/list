const express = require('express')
const {index,create,remove,update,show} = require('../controller/postController')
const auth = require('../middleware/auth')

let router = express.Router()

//查询贴子路由接口
/**
 * @api {get} http://localhost:3000/posts 获取帖子列表
 * @apiName index
 * @apiGroup Post
 *
 * @apiSuccess {Number} error错误状态码.
 * @apiSuccess {String} msg 错误信息.
 * @apiSuccess {String} data查询的帖子数组
 */
router.get('/',index)

//创建帖子路由接口
/**
 * @api {post} http://localhost:3000/posts 创建帖子
 * @apiName Create
 * @apiGroup Post
 *
 * @apiParam {String} title帖子标题
 * @apiParam {String} content帖子内容
 * 
 * @apiSuccess {Number} error错误状态码.
 * @apiSuccess {String} msg 错误信息.
 */
router.post('/',auth,create)


/**
 * @api {delete} http://localhost:3000/posts 删除帖子
 * @apiName Delete
 * @apiGroup Post
 *
 * @apiParam {String} id
 * 
 * @apiSuccess {Number} error错误状态码.
 * @apiSuccess {String} msg 错误信息.
 */
//删除贴子路由接口
router.delete('/:id',auth,remove)


//修改贴子路由接口
/**
 * @api {put} http://localhost:3000/posts 修改帖子
 * @apiName put
 * @apiGroup Post
 *
 * @apiParam {String} title要修改的帖子标题
 * @apiParam {String} content要修改的帖子内容
 * 
 * @apiSuccess {Number} error错误状态码.
 * @apiSuccess {String} msg 错误信息.
 */
router.put('/:id',auth,update)


/**
 * @api {get} http://localhost:3000/posts:/id 获取详情页数据
 * @apiGroup Post
 *
 * @apiParam {String} id 需要传递id参数
 * 
 * @apiSuccess {Number} error 错误状态码.
 * @apiSuccess {String} msg 错误信息.
 * @apiSuccess {String} data 指定id的内容.
 */
router.get('/:id',show)



module.exports = router