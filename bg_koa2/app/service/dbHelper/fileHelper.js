var mongoose = require('mongoose')
var File = mongoose.model('File')

/**
 * 通过对应数据的id查询
 * @param  {[type]} options._msgId [description]
 * @return {[type]}                [description]
 */
exports.findByMsgId = async ({ _msgId }) => {
	try{
		var query = await File.find({ _msgId });
  	return query[0]? query[0]: {}
	}
	catch(err){
		return false
	}
}

/**
 * 查找所有附件
 * @return {[type]} [description]
 */
exports.findAllFiles = async () => {
	try{
		var query = await File.find({});
  	return query? query: []
	}
	catch(err){
		return false
	}
}

/**
 * 增加附件记录
 * @param  {[File]} file [mongoose.model('File')]
 * @return {[type]}      [description]
 */
exports.addFile = async (file) => {
	try{
		file = await file.save()
		return {boo:true, data:file}
	}
	catch(err){
		return {boo:false, err:err}
	}
}

/**
 * 删除附件记录
 * @param  {[type]} options._id [description]
 * @return {[type]}                [description]
 */
exports.deleteFile = async ({ _id }) => {
  var flag = false
  console.log('flag==========>' + flag)
  await File.remove({ _id }, function (err) {
    if (err) {
      flag = false
    } else {
      flag = true
    }
  })
  console.log('flag=====await=====>' + flag)
  return flag
}