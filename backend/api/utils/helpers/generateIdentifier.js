const moment = require('moment');
const sha256 = require('./sha256hash');

const generateIdentifier = (firstName, lastName) => {
    const identifier = sha256(firstName + lastName + moment().format('YYYY-MM-DD-H:mm:ss'));

    return identifier
}

module.exports = generateIdentifier;