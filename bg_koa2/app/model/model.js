var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var ModelSchema = new Schema({
    _id: {type: String},
    title: {type: String},
    keys: {type: Array},
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