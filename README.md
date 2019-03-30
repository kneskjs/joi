# Knesk Joi &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/knesklab/joi/blob/master/LICENSE)
#### Joi Library Extended (https://github.com/hapijs/joi)

### How to Install
  ```javascript
npm install @knesk/joi
or
yarn add @knesk/joi
```

#### Examples
Check example.js for more examples and run by using command **node example.js**

### Usage
```
const Joi = require('@knesk/joi')
const schema = {
	user: Joi.objectId(), // Mongo Object ID Validation
};
const value = {
	user: '584ebf8bee8d98127efb080c'  
};
const result = Joi.validate(value, schema);
console.log(result.error) // null
console.log(result.value) // { user: 584ebf8bee8d98127efb080c }
```