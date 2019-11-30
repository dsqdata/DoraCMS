/**
 * Created by Administrator on 2017/5/19.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var shortid = require('shortid');

var UserConfigSchema = new Schema({
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
    }, //用户是否有效
    type:{
        type: String //1-体重  2-目标  3-体围
    },
    cDate:{
        type: String
    },
    cData:{},
    lastupdatetime: {
        type: Date,
        default: Date.now,
    }
});

var UserConfig = mongoose.model("UserConfig", UserConfigSchema);
module.exports = UserConfig;
