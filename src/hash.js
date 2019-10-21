'use strict';
const Joi = require('joi');
var bcrypt = require('bcryptjs');

module.exports = {
    base: Joi.string(),
    name: 'hash',
    language: {
        // base: 'must be a valid ObjectId'
    },
    pre(value, state, options) {
        // if(!value) {
        //     value = Math.floor(Math.random() * 90000) + 10000000
        // }
        return bcrypt.hashSync(value.toString(), 10)
    }
};