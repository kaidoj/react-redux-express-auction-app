import {
    PLACE_A_BID_REQUESTED,
    PLACE_A_BID_RECEIVED,
    PLACE_A_BID_FAILED
} from '../actions/types'

const initialState = {
    fetching: false,
    error: {}
}

const placeABid = (state = initialState, action) => {
    switch (action.type) {
        case PLACE_A_BID_REQUESTED:
            return { ...state,
                fetching: true,
                error: {}
            }
        case PLACE_A_BID_RECEIVED:
            return { ...state,
                fetching: false,
                error: {},
            }
        case PLACE_A_BID_FAILED:
            return { ...state,
                fetching: false,
                error: action.error
            }
        default:
            return state
    }
}

export default placeABid;