import {
    BID_ADDED,
} from '../actions/types'
import {
    getBids,
    addBid
} from '../utils/bids'

const initialState = {
    fetching: false,
    bids: getBids(),
    error: {}
}

export const bids = (state = initialState, action) => {
    switch (action.type) {
        case BID_ADDED:
            return { ...state,
                fetching: false,
                error: {},
                bids: addBid(state.bids, action.bid)
            }
        default:
            return state
    }
}