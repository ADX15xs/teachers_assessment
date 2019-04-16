const router = require('koa-router')()
const User = require('../../app/controller/user')
const App = require('../../app/controller/app')

router.prefix('/api/a')

router.get('/', function (ctx, next) {
  ctx.body = "this api for Admin!";
})

router.post('/update', App.hasBody, App.hasToken, User.update)

router.post('/user/users', User.findUser)
router.post('/user/add', User.addUser)
router.post('/user/delete', App.hasBody, User.deleteUser)

module.exports = router
