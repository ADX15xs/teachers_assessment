const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const session = require('koa-session')
const registerRouter = require('./routes/routes')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// 连接数据库
const connect = require('./config/dbConnect')
connect();
// 注册model
const walk = require('./middelware/registModel')
walk();

// session
app.keys = ['some secret hurr'];  /* cookie的签名 */
const CONFIG = {
  key: 'koa:sess',    /** 默认的cookie签名 */
  maxAge: 86400000,   /** cookie的最大过期时间 */
  overwrite:  true,   /** 是否可以overwrite (默认default true) */
  httpOnly:   true,   /** cookie是否只有服务器端可以访问 httpOnly or not (default true) */
  signed:     true,   /** 签名默认true */
  rolling:    false,  /** 每次请求强行设置cookie */
  renew:      false,  /** cookie快过期时自动renew */
};
app.use(session(CONFIG, app));

// routes
app.use(registerRouter())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
