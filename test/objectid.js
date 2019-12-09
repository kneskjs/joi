const Joi = require('../index')

const bodySchema = Joi.object({
  title: Joi.string().required(),
  type: Joi.objectId(),
})
const result = bodySchema.validate({
  title: 'aman',
  type: '507f191e810c19729de860ea',
  phone: '343434343'
}, {
  stripUnknown: true
});

console.log(result.error)
console.log(result.value)
console.log(typeof(result.value['type']))