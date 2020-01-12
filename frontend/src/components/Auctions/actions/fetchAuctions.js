import config from '../../../config/config'
import {
    FETCH_AUCTIONS_REQUESTED,
    FETCH_AUCTIONS_RECEIVED,
    FETCH_AUCTIONS_FAILED
} from './types'
import api from '../../../utils/api'

const failed = (error) => {
    return {
        type: FETCH_AUCTIONS_FAILED,
        error: error
    }
}

const requested = () => {
    return {
        type: FETCH_AUCTIONS_REQUESTED
    }
}

const received = (payload) => {
    return {
        type: FETCH_AUCTIONS_RECEIVED,
        auctions: payload.auctions,
        categories: payload.categories
    }
}

export const fetchAuctions = () => {
    return (dispatch) => {
        dispatch(requested());
        api.get(config.urls.auctions)
            .then((resp) => {
                if (resp.data.auctions) {
                    dispatch(received(resp.data))
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

export const fetchAuctionsByCategory = (category) => {
    return (dispatch) => {
        dispatch(requested());
        api.get(config.urls.auctionsByCategories + category)
            .then((resp) => {
                if (resp.data.auctions) {
                    dispatch(received(resp.data))
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