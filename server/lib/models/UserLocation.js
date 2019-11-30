/**
 * Created by Administrator on 2017/5/19.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var shortid = require('shortid');

var UserLocationSchema = new Schema({
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
    wxUserInfo: {}
});

var UserLocation = mongoose.model("UserLocation", UserLocationSchema);
module.exports = UserLocation;
