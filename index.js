const Joi = require('@hapi/joi');
const objectId = require('./src/objectId');

let Koi = Joi.extend((joi) => objectId(joi) );

module.exports = Koi