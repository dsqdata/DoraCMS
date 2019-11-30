'use strict';
const _ = require('lodash')
const {
    UserLocation
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


class UserLocationService {

    async count(params = {}) {
        return _count(UserLocation, params);
    }

    async create(payload) {
        return _create(UserLocation, payload);
    }

    async removes(res, values, key = '_id') {
        return _removes(res, UserLocation, values, key);
    }

    async safeDelete(res, values) {
        return _safeDelete(res, UserLocation, values);
    }

    async update(res, _id, payload) {
        return _update(res, UserLocation, _id, payload);
    }

    async addToSet(res, _id, payload) {
        return _addToSet(res, UserLocation, _id, payload);
    }

    async pull(res, _id, payload) {
        return _pull(res, UserLocation, _id, payload);
    }

    async item(res, {
        query = {},
        populate = [],
        files = null
    } = {}) {
        return _item(res, UserLocation, {
            query: _.assign({
                state: '1'
            }, query),
            populate: !_.isEmpty(populate) ? populate : [],
            files: files ? files : '',
        })
    }


}

module.exports = new UserLocationService();
