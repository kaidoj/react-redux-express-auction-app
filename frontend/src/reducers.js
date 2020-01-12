import {
    combineReducers
} from 'redux'
import {
    reducer as toastrReducer
} from 'react-redux-toastr'

import auctionsReducer from './components/Auctions/reducers'
import modalReducer from './components/Modal/reducers/modal'
import placeABidReducer from './components/PlaceABid/reducers/placeABid'
import authencticationReducer from './components/Authenticate/reducers/index'
import bidsReducer from './components/Bids/reducers'

const rootReducer = combineReducers({
    auctions: auctionsReducer.auctions,
    modal: modalReducer,
    toastr: toastrReducer,
    placeABid: placeABidReducer,
    auth: authencticationReducer.authentication,
    bids: bidsReducer.bids
})

export default rootReducer