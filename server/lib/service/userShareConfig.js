'use strict';
const _ = require('lodash')
const {
    UserShareConfig
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


class UserShareConfigService {

    async find(payload, {
        query = {},
        searchKeys = [],
        populate = [],
        files = null
    } = {}) {
        let listdata = _list(UserShareConfig, payload, {
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
        return _count(UserShareConfig, params);
    }

    async create(payload) {
        return _create(UserShareConfig, payload);
    }

    async removes(res, values, key = '_id') {
        return _removes(res, UserShareConfig, values, key);
    }

    async safeDelete(res, values) {
        return _safeDelete(res, UserShareConfig, values);
    }

    async update(res, _id, payload) {
        return _update(res, UserShareConfig, _id, payload);
    }

    async addToSet(res, _id, payload) {
        return _addToSet(res, UserShareConfig, _id, payload);
    }

    async pull(res, _id, payload) {
        return _pull(res, UserShareConfig, _id, payload);
    }

    async item(res, {
        query = {},
        populate = [],
        files = null
    } = {}) {
        return _item(res, UserShareConfig, {
            query: _.assign({
                state: '1'
            }, query),
            populate: !_.isEmpty(populate) ? populate : [],
            files: files ? files : null,
        })
    }


}

module.exports = new UserShareConfigService();
