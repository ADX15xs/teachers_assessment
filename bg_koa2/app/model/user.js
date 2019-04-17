var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  _id: { type: String },
  workId: { type: String },
  realName: { type: String },
  type: { type: String, default: 'd' },
  accessToken: { type: String }
})

var User = mongoose.model('User', UserSchema)

module.exports = User