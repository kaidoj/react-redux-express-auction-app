import React from 'react'
import ReactDOM from 'react-dom'
import {
    Provider
} from 'react-redux'
import store from '../../../createStore'
import Authenticate from '../Authenticate'

it('Authenticate renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Provider store={store}><Authenticate/></Provider>, div)
    ReactDOM.unmountComponentAtNode(div)
})