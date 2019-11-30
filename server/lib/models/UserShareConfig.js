/**
 * Created by Administrator on 2017/5/19.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var shortid = require('shortid');

var UserShareConfigSchema = new Schema({
    _id: {
        type: String,
        'default': shortid.generate
    },
    openid: {
        type: String
    },
    enable: {
        type: Boolean,
        default: true
    },
    lastupdatetime: {
        type: Date,
        default: Date.now,
    }
});

var UserShareConfig = mongoose.model("UserShareConfig", UserShareConfigSchema);
module.exports = UserShareConfig;
