/**
 * Created by Administrator on 2017/5/19.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var shortid = require('shortid');

var UserShareSchema = new Schema({
    _id: {
        type: String,
        'default': shortid.generate
    },
    openid: {
        type: String
    },
    nickName: {
        type: String
    },
    avatarUrl: {
        type: String
    },
    title: {
        type: String
    },
    content: {
        type: String
    },
    date: {
        type: String
    },
    detailPics: [],
    enable: {
        type: Boolean,
        default: true
    },
    lastupdatetime: {
        type: Date,
        default: Date.now,
    }
});

var UserShare = mongoose.model("UserShare", UserShareSchema);
module.exports = UserShare;
