const express = require('express')
const {index,create,remove,update} = require('../controller/postController')

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
router.post('/',create)


//创建帖子路由接口
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
router.delete('/:id',remove)


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
router.put('/:id',update)


module.exports = router