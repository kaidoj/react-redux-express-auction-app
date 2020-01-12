import api from '../../../utils/api'
import config from '../../../config/config'
import {
    toastr
} from 'react-redux-toastr'
import {
    AUTH_REQUESTED,
    AUTH_RECEIVED,
    AUTH_FAILED
} from './types'

const failed = (error) => {
    return {
        type: AUTH_FAILED,
        error: error
    }
}

const requested = () => {
    return {
        type: AUTH_REQUESTED
    }
}

const received = (payload) => {
    return {
        type: AUTH_RECEIVED,
        token: payload.token,
        user: payload.user
    }
}

export const authenticate = (data) => {
    return (dispatch) => {
        dispatch(requested());
        api.post(config.urls.authenticate, data)
            .then((resp) => {
                if (resp.data.token) {
                    dispatch(received(resp.data))
                    toastr.success('Successful', 'Authentication was successful')
                } else {
                    dispatch(failed(resp.data.errors))
                }
            })
            .catch((error) => {
                console.log(error);
                dispatch(failed(error.response.data.errors))
            })
    }
}