const Joi = require('joi');
const ObjectId = require('bson').ObjectId;

let joiObjectId = [{
    name: 'objectId',
    language: {
        base: 'must be a valid ObjectId'
    },
    pre(value, state, options) {

        if (!ObjectId.isValid(value)) {
            return this.createError('objectId.base', { value }, state, options);
        }

        if (options.convert) {
            return new ObjectId(value); // Change the value
        }

        return value; // Keep the value as it was
    }
}];

const myJoi = Joi.extend(joiObjectId);
module.exports = myJoi