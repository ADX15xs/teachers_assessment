var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var ModelSchema = new Schema({
  title: { type: String },
  keys: { type: Array },
  url: { type: String },
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

var Model = mongoose.model('Model', ModelSchema)

module.exports = Model