var mongoose = require('mongoose')
var User = mongoose.model('User')

/**
 * 通过工号查询
 * @param  {[type]} options.workId [description]
 * @return {[type]}                [description]
 */
exports.findByWorkId = async ({ workId }) => {
	try{
		var query = await User.find({ workId });
  	return query[0]? query[0]: {}
	}
	catch(err){
		return false
	}
}

/**
 * 查找所用用户
 * @return {[type]} [description]
 */
exports.findAllUsers = async () => {
	try{
		var query = await User.find({});
  	return query? query: []
	}
	catch(err){
		return false
	}
}

/**
 * 增加用户
 * @param  {[User]} user [mongoose.model('User')]
 * @return {[type]}      [description]
 */
exports.addUser = async (user) => {
	try{
		user = await user.save()
		return {boo:true, data:user}
	}
	catch(err){
		return {boo:false, err:err}
	}
}

/**
 * 删除用户
 * @param  {[type]} options.workId [description]
 * @return {[type]}                [description]
 */
exports.deleteUser = async ({ workId }) => {
  var flag = false
  console.log('flag==========>' + flag)
  await User.remove({ workId }, function (err) {
    if (err) {
      flag = false
      // return false
    } else {
      flag = true
    }
  })
  console.log('flag=====await=====>' + flag)
  return flag
}