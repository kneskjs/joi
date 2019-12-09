'use strict';

const ObjectId = require('bson').ObjectId;

module.exports = function (joi) {
    return {
        type: 'objectId',
        // base: joi.string(),
        messages: {
            'valid': '"{{#label}}" must be valid ObjectId',
        },
        
        coerce(value, helpers) {

            if (typeof value === 'object') {
                return;
            }

            value = ObjectId.isValid(value) ? new ObjectId(value) : value

            return { value };
        },
        
        validate(value, helpers) {
            if (!ObjectId.isValid(value)) {
                return { value, errors: helpers.error('valid') };
            }
        },
    }
}