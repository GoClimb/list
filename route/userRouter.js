const express = require('express')
const multer = require('multer')
const auth = require('../middleware/auth')
let { register,login,update,getInfo } = require('../controller/userController')

const upload = multer({
    dest:'./upload'
})
let router = express.Router()

router.get('/getInfo',auth,getInfo)

router.post('/register',register)

router.post('/login',login)

router.put('/update', auth, upload.single('headPortrait'), update)

module.exports = router