import React from 'react'
import {
    MODAL_OPEN,
    MODAL_CLOSE
} from '../actions/types'
import Loading from '../../Loading/Loading'

const initialState = {
    open: false,
    title: 'Loading',
    content: <Loading />
}

const modal = (state = initialState, action) => {
    switch (action.type) {
        case MODAL_OPEN:
            return { ...state,
                open: true,
                title: action.title,
                content: action.content
            }
        case MODAL_CLOSE:
            return { ...state,
                open: false,
                title: action.title,
                content: action.content
            }
        default:
            return state
    }
}

export default modal