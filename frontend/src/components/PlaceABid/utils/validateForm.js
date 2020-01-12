import {
    toastr
} from 'react-redux-toastr'

export const validateForm = async (data) => {

    let errors = []

    if (data.bidAmount === '') {
        errors = [...errors, 'Bid amount is required']
    }

    if (!isNumeric(data.bidAmount)) {
        errors = [...errors, 'Bid amount must be numeric']
    }

    if (errors.length > 0) {
        await errors.map((error) => {
            toastr.error('Error', error)
            return error
        })
        return false
    }

    return true
}

const isNumeric = (n) => {
    return !isNaN(parseFloat(n)) && isFinite(n);
}