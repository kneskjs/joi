const Joi = require('joi');
const joiObjectId = require('./src/ObjectId');
const hash = require('./src/hash');


function KJoi() {
    let myJoi = Joi.extend(joiObjectId);
    myJoi = myJoi.extend(hash)
    // export default myJoi
    return myJoi
}

module.exports = KJoi