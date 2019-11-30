'use strict';
const _ = require('lodash')
const {
    UserConfig
} = require('../models/index');
const {
    _list,
    _item,
    _count,
    _create,
    _update,
    _removes,
    _safeDelete,
    _addToSet,
    _pull
} = require('./general');


class UserConfigService {

    async find(payload, {
        query = {},
        searchKeys = [],
        populate = [],
        files = null
    } = {}) {
        let listdata = _list(UserConfig, payload, {
            sort : {
                lastupdatetime: -1
            },
            query: query,
            searchKeys: searchKeys,
            populate: populate,
            files
        });
        return listdata;

    }

    async count(params = {}) {
        return _count(UserConfig, params);
    }

    async create(payload) {
        return _create(UserConfig, payload);
    }

    async removes(res, values, key = '_id') {
        return _removes(res, UserConfig, values, key);
    }

    async safeDelete(res, values) {
        return _safeDelete(res, UserConfig, values);
    }

    async update(res, _id, payload) {
        return _update(res, UserConfig, _id, payload);
    }

    async addToSet(res, _id, payload) {
        return _addToSet(res, UserConfig, _id, payload);
    }

    async pull(res, _id, payload) {
        return _pull(res, UserConfig, _id, payload);
    }

    async item(res, {
        query = {},
        populate = [],
        files = null
    } = {}) {
        return _item(res, UserConfig, {
            query: _.assign({
                state: '1'
            }, query),
            populate: !_.isEmpty(populate) ? populate : [],
            files: files ? files : null,
        })
    }
}

module.exports = new UserConfigService();
