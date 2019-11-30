/*
 * @Author: doramart
 * @Date: 2019-07-07 13:07:27
 * @Last Modified by: doramart
 * @Last Modified time: 2019-07-27 14:02:19
 */


const xss = require("xss");
const shortid = require('shortid');
const _ = require('lodash');

const {
    cache,
    siteFunc,
    validatorUtil
} = require('@utils');
const validator = require('validator');
const qr = require('qr-image')

const {
    planService,
    systemConfigService,
    contentTemplateService,
    contentTagService,
    contentService,
    messageService,
    adminUserService,
    contentCategoryService
} = require('@service');


exports.add = async (req, res, next) => {
    try {
        let plan = req.body
        plan.content = encodeURIComponent(req.body.content)
        if (!!!plan._id) {
            planService.add(req.body);
        } else {
            planService.update(req.body);
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
        let one = await planService.getOne(id)
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

        let list = await planService.get(pageNum, pageSize, filter);

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
        planService.delete(req.body.id);
        renderSuccess(req, res);
    } catch (err) {
        renderFail(req, res, {
            message: err
        });
    }
}
