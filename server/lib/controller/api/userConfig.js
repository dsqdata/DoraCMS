const xss = require("xss");
const shortid = require('shortid');
const _ = require('lodash');

const {
    cache,
    siteFunc,
    validatorUtil
} = require('@utils');

const {
    userConfigService,
} = require('@service');


exports.add = async (req, res, next) => {
    try {
        let plan = req.body
        plan.content = encodeURIComponent(req.body.content)
        if (!!!plan._id) {
            userConfigService.add(req.body);
        } else {
            userConfigService.update(req.body);
        }
        renderSuccess(req, res);
    } catch (err) {
        renderFail(req, res, {
            message: err
        });
    }
}

exports.getOne = async (req, res, next) => {
    try {
        let id = req.body.id
        let one = await userConfigService.getOne(id)
console.log(one)
        renderSuccess(req, res, {
            data: one
        });
    } catch (err) {
        renderFail(req, res, {
            message: err
        });
    }
}

exports.getList = async (req, res, next) => {
    try {
        let pageNum = req.body.pageNum
        if (!pageNum) {
            pageNum = 1;
        }

        let pageSize = req.body.pageSize
        if (!pageSize) {
            pageSize = 10;
        }

        let filter = req.body.filter
        if (!filter) {
            filter = {}
        }

        let list = await userConfigService.get(pageNum, pageSize, filter);

        renderSuccess(req, res, {
            data: list
        });
    } catch (err) {
        renderFail(req, res, {
            message: err
        });
    }
}

exports.deletePlan = async (req, res, next) => {
    try {
        userConfigService.delete(req.body.id);
        renderSuccess(req, res);
    } catch (err) {
        renderFail(req, res, {
            message: err
        });
    }
}
