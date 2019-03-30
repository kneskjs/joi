const Joi = require('./index.js')

const schema = {
	user: Joi.objectId(),
};

const value = {
	user: '584ebf8bee8d98127efb080c'  // Add Object ID: 584ebf8bee8d98127efb080c
};

const result = Joi.validate(value, schema);
console.log(result.error)
console.log(result.value)
