const xss = require('xss')
const uuid = require('uuid')
const mongoose = require('mongoose')
const User = mongoose.model('User')
const userHelper = require('../service/dbHelper/userHelper')
const pinyin = require('../../public/javascripts/pinyin').pinyin

/**
 * 注册新用户
 * @param {Function} next          [description]
 * @yield {[type]}                 [description]
 */
exports.login = async (ctx, next) => {
  var requ = ctx.request.body;
  var workId = xss(ctx.request.body.workId);
  var user = await User.findOne({ workId: workId });
  var isFirst = !user ? true : false;
  var resUser = {};

  if (isFirst) {
    resUser = {
      _id: pinyin.getCamelChars(requ.realName)+'_'+requ.workId+'_D',
      workId: requ.workId,
      realName: requ.realName,
      accessToken: uuid.v1()
    }
    user = new User(resUser);
    // ctx.redirect('/default');
  }else{
    switch(user.type){
      case 'a':
        // ctx.redirect('/admin');
        break;
      case 'c':
        // ctx.redirect('/collecter');
        break;
      case 'd':
        // ctx.redirect('/default');
        break;
      default:
        ctx.body = {
          success: false,
          errText: 'Unknown userType: '+user.type
        }
    }
  }

  try {
    user = await user.save()
    ctx.body = {
      success: true,
      userType: user.type
    }
  }
  catch (e) {
    ctx.body = {
      success: false,
      err: e
    }
    return next
  }
}

/**
 * 更新用户信息操作
 * @param  {[type]}   ctx  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
exports.update = async (ctx, next) => {
  var body = ctx.request.body
  var workId = body.workId
  var user = await User.findOne({ workId: workId });
  var fields = 'realName,type'.split(',')

  fields.forEach(function (field) {
    if (body[field]) {
      user[field] = xss(body[field].trim())
    }
  })

  try{
    user = await user.save()
    console.log('saved')
  }
  catch(err){
    user = null
    console.log(err)
  }

  ctx.body = {
    success: user?true: false,
    data: user
  }
}

/**
 * 数据库接口测试
 * @param  {[type]}   ctx  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
exports.findUser = async (ctx, next) => {
  var workId = ctx.request.body.workId
  if(!workId){
    var data = await userHelper.findAllUsers()
    // console.log('data=====================================>'+data)
    ctx.body = {
      success: true,
      data
    }
  }else{
    var obj = await userHelper.findByWorkId({workId : workId})
    // console.log('obj=====================================>'+obj)
    ctx.body = {
      success: true,
      obj
    }
  }
}

exports.addUser = async (ctx, next) => {
  var user = new User({
      _id: 'GLY_5678_D',
      workId: xss('5678'),
      realName: '王五',
      type: 'd',
      accessToken: uuid.v1()
    })
  var user2 =  await userHelper.addUser(user)
  if(user2.boo){
    ctx.body = {
      success: true,
      data : user2.data
    }
  }else{
    ctx.body = {
      success: false,
      err: user2.err
    }
  }
}

exports.deleteUser = async (ctx, next) => {
  const workId = xss(ctx.request.body.workId.trim())
  console.log('Ready to delete user '+workId+'!')
  var data  = await userHelper.deleteUser({workId})
  ctx.body = {
    success: true,
    data
  }
}