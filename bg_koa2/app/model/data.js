var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var DataSchema = new Schema({
  title: { type: String },
  _uId: { type: String },
  _mId: { type: String },
  data: { type: String },
  meta: {
    createAt: {
      type: Date,
      dafault: Date.now()
    },
    updateAt: {
      type: Date,
      dafault: Date.now()
    }
  }
})

var Data = mongoose.model('Data', DataSchema)

module.exports = Data