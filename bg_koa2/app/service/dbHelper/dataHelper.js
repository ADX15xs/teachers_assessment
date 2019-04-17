var mongoose = require('mongoose')
var Data = mongoose.model('Data')

/**
 * 条件查询
 * @param  {[type]} options._uId [description]
 * @return {[type]}                [description]
 */
exports.findByUId = async ({ _uId }) => {
  try {
    var query = await Data.find({ _uId });
    return query[0] ? query[0] : {}
  }
  catch (err) {
    return false
  }
}

/**
 * 查找所有数据
 * @return {[type]} [description]
 */
exports.findAllDatas = async () => {
  try {
    var query = await Data.find({});
    return query ? query : []
  }
  catch (err) {
    return false
  }
}

/**
 * 增加数据
 * @param  {[Data]} data [mongoose.model('Data')]
 * @return {[type]}      [description]
 */
exports.addData = async (data) => {
  try {
    data = await data.save()
    return { boo: true, data: data }
  }
  catch (err) {
    return { boo: false, err: err }
  }
}

/**
 * 删除数据
 * @param  {[type]} options._id [description]
 * @return {[type]}                [description]
 */
exports.deleteData = async ({ _id }) => {
  var flag = false
  console.log('flag==========>' + flag)
  await Data.remove({ _id }, function (err) {
    if (err) {
      flag = false
    } else {
      flag = true
    }
  })
  console.log('flag=====await=====>' + flag)
  return flag
}