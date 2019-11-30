/**
 * Created by Administrator on 2015/4/15.
 * 子模板信息
 */
var mongoose = require('mongoose');
var shortid = require('shortid');
var Schema = mongoose.Schema;

var PlanSchema = new Schema({
    _id: {
        type: String,
        'default': shortid.generate
    },
    openid: {
        request: true,
        type: String,
    },
    avatarUrl: String,
    nickName: String,
    title: String,
    date: String,
    status: String, // 0-删除 1-正常
    color: String,
    content: String,
    lastupdatetime: {
        type: Date,
        default: Date.now,
    },
});

PlanSchema.statics = {
};
var Plan = mongoose.model("Plan", PlanSchema);
module.exports = Plan;

