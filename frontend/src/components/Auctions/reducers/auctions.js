import {
    FETCH_AUCTIONS_REQUESTED,
    FETCH_AUCTIONS_RECEIVED,
    FETCH_AUCTIONS_FAILED
} from '../actions/types'

const initialState = {
    fetching: false,
    auctions: [],
    categories: [],
    error: {}
}

export const auctions = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_AUCTIONS_REQUESTED:
            return { ...state,
                fetching: true,
                auctions: [],
                error: {}
            }
        case FETCH_AUCTIONS_RECEIVED:
            return { ...state,
                fetching: false,
                error: {},
                auctions: action.auctions,
                categories: action.categories
            }
        case FETCH_AUCTIONS_FAILED:
            return { ...state,
                fetching: false,
                error: action.error
            }
        default:
            return state
    }
}