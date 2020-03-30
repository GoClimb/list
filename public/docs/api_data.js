define({ "api": [
  {
    "type": "post",
    "url": "http://localhost:3000/posts",
    "title": "创建帖子",
    "name": "Create",
    "group": "\bPost",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>帖子标题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>帖子内容</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>错误状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "route/postRouter.js",
    "groupTitle": "\bPost"
  },
  {
    "type": "delete",
    "url": "http://localhost:3000/posts",
    "title": "删除帖子",
    "name": "Delete",
    "group": "\bPost",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>错误状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "route/postRouter.js",
    "groupTitle": "\bPost"
  },
  {
    "type": "get",
    "url": "http://localhost:3000/posts:/id",
    "title": "获取详情页数据",
    "group": "\bPost",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>需要传递id参数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>错误状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>\b\b\b指定id的内容.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "route/postRouter.js",
    "groupTitle": "\bPost",
    "name": "GetHttpLocalhost3000PostsId"
  },
  {
    "type": "get",
    "url": "http://localhost:3000/posts",
    "title": "获取帖子列表",
    "name": "index",
    "group": "\bPost",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>错误状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>查询的帖子数组</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "route/postRouter.js",
    "groupTitle": "\bPost"
  },
  {
    "type": "put",
    "url": "http://localhost:3000/posts",
    "title": "修改帖子",
    "name": "put",
    "group": "\bPost",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>要修改的帖子标题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>要修改的帖子内容</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>错误状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "route/postRouter.js",
    "groupTitle": "\bPost"
  }
] });
