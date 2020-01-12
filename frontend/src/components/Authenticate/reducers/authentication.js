import {
    AUTH_REQUESTED,
    AUTH_RECEIVED,
    AUTH_FAILED
} from '../actions/types'
import {
    getToken,
    getUser,
    setToken,
    setUser
} from '../utils/sessions/sessionStorage'

const authenticated = getToken()
const user = getUser()

const initialState = {
    fetching: false,
    authenticated: authenticated ? true : false,
    token: authenticated ? authenticated : null,
    user: user ? user : null,
    error: {}
}

export const authentication = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_REQUESTED:
            return { ...state,
                fetching: true,
                authenticated: false,
                token: null,
                user: null,
                error: {}
            }
        case AUTH_RECEIVED:
            return { ...state,
                fetching: false,
                token: setToken(action.token),
                user: setUser(action.user),
                authenticated: true,
                error: {},
            }
        case AUTH_FAILED:
            return { ...state,
                fetching: false,
                authenticated: false,
                token: null,
                user: null,
                error: action.error
            }
        default:
            return state
    }
}