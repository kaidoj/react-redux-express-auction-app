import {
    toastr
} from 'react-redux-toastr'

export const authenticateForm = async (data) => {

    let errors = []

    if (data.firstName === '') {
        errors = [...errors, 'First name is required']
    }

    if (data.lastName === '') {
        errors = [...errors, 'Last name is required']
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