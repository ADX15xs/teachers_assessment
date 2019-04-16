var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var FileSchema = new Schema({
    _id: {type: String},
    title: {type: String},
    _msgId: {type: String},
    url: {type: String},
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

var File = mongoose.model('File', FileSchema)

module.exports = File