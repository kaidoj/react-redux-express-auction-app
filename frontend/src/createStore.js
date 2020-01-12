import reducers from './reducers'
import reduxThunk from 'redux-thunk'
import {
    createStore,
    applyMiddleware
} from 'redux'
import {
    composeWithDevTools
} from 'redux-devtools-extension'

let store = null

if (process.env.NODE_ENV) {
    store = createStore(
        reducers,
        composeWithDevTools(
            applyMiddleware(reduxThunk)
        )
    )
} else {
    const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)
    store = createStoreWithMiddleware(reducers)
}

export default store