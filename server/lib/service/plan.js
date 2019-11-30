/*
 * @Author: doramart
 * @Date: 2019-06-24 13:20:49
 * @Last Modified by: doramart
 * @Last Modified time: 2019-07-13 01:32:58
 */


'use strict';

const {
    Plan
} = require('../models/index');
const _ = require('lodash')

const {
    _list,
    _item,
    _count,
    _create,
    _update,
    _removes,
    _safeDelete
} = require('./general');


class PlanService {

    // 更新用户信息
    async add(plan) {
        plan.status = '1'
        return await Plan.create(plan).exec();
    }

    async update(plan) {
        await Plan.findOneAndUpdate({_id: plan._id}, plan).exec();
    }

    async getOne(id) {
        return await Plan.findOne({_id: id}).exec();
    }

    async get (pageNum, pageSize, filter) {
        filter.status = '1'
        const count = await Plan.count(filter)
        const data = await Plan.find(filter, {title: 1}).skip((pageNum - 1) * pageSize)
            .limit(pageSize)
            .sort({'lastupdatetime': -1}).exec();
        return {totalCount: count, data: data};
    }

    async delete(id) {
        await Plan.findOneAndUpdate({_id: id}, {status: '0'}).exec();
    }

}

module.exports = new PlanService();
