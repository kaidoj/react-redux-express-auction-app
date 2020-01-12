const validator = require('validator');

const userValidate = (data) => {
    let errors = []

    if (validator.isEmpty(data.firstName)) {
        errors = [...errors, 'First name is required']
    }

    if (validator.isEmpty(data.lastName)) {
        errors = [...errors, 'Last name is required']
    }

    if (errors.length > 0) {
        console.log(errors)
        return false;
    }

    return true;
}

module.exports = userValidate;