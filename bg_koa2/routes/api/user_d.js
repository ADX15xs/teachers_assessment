const router = require('koa-router')()

router.prefix('/api/d')

router.get('/', function (ctx, next) {
  // 
  ctx.body = "this api for Defalt Teachers!";
})

module.exports = router
