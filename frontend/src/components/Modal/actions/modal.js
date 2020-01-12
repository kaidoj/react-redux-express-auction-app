import React from 'react'
import {
    MODAL_OPEN,
    MODAL_CLOSE
} from "./types"
import Loading from "../../Loading/Loading"

export const openModal = (title, content) => {
    return {
        type: MODAL_OPEN,
        title: title,
        content: content
    }
}

export const closeModal = () => {
    return {
        type: MODAL_CLOSE,
        title: 'Loading',
        content: <Loading />
    }
}