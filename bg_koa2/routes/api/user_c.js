const router = require('koa-router')()

router.prefix('/api/c')

router.get('/', function (ctx, next) {
  // 
  ctx.body = "this api for Collecter!";
})

module.exports = router
