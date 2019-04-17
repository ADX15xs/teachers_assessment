var mongoose = require('mongoose')
var Model = mongoose.model('Model')

/**
 * 查找所有模板
 * @return {[type]} [description]
 */
exports.findAllModels = async () => {
	try{
		var query = await Model.find({});
  	return query? query: []
	}
	catch(err){
		return false
	}
}

/**
 * 增加模板
 * @param  {[Model]} model [mongoose.model('Model')]
 * @return {[type]}      [description]
 */
exports.addModel = async (model) => {
	try{
		model = await model.save()
		return {boo:true, data:model}
	}
	catch(err){
		return {boo:false, err:err}
	}
}

/**
 * 删除模板
 * @param  {[type]} options._id [description]
 * @return {[type]}                [description]
 */
exports.deleteModel = async ({ _id }) => {
  var flag = false
  console.log('flag==========>' + flag)
  await Model.remove({ _id }, function (err) {
    if (err) {
      flag = false
    } else {
      flag = true
    }
  })
  console.log('flag=====await=====>' + flag)
  return flag
}