import config from '../../../config/config'
import {
    toastr
} from 'react-redux-toastr'
import {
    PLACE_A_BID_REQUESTED,
    PLACE_A_BID_RECEIVED,
    PLACE_A_BID_FAILED
} from './types'
import api from '../../../utils/api'
import { addBid } from '../../Bids/actions';

const failed = (error) => {
    return {
        type: PLACE_A_BID_FAILED,
        error: error
    }
}

const requested = () => {
    return {
        type: PLACE_A_BID_REQUESTED
    }
}

const received = () => {
    return {
        type: PLACE_A_BID_RECEIVED
    }
}

export const placeABid = (data) => {
    return (dispatch) => {
        dispatch(requested());
        api.post(config.urls.placeABid, data)
            .then((resp) => {
                if (resp.data.success) {
                    dispatch(received())
                    dispatch(addBid(resp.data.bid))
                    toastr.success('Success', 'Bid succesfully placed')
                } else {
                    dispatch(failed(resp.data.errors))
                }
            })
            .catch((error) => {
                console.log(error)
                dispatch(failed(error.response.data.errors))
            })
    }
}