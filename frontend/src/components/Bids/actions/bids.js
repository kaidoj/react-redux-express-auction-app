import {
    BID_ADDED
} from './types'

export const addBid = (bid) => {
    return {
        type: BID_ADDED,
        bid: bid
    }
}