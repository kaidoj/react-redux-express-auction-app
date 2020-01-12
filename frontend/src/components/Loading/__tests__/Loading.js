import React from 'react'
import ReactDOM from 'react-dom'
import {
    Provider
} from 'react-redux'
import store from '../../../createStore'
import Loading from '../Loading'

it('Loading renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Provider store={store}><Loading/></Provider>, div)
    ReactDOM.unmountComponentAtNode(div)
})