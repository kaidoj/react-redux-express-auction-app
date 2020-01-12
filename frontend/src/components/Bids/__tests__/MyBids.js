import React from 'react'
import ReactDOM from 'react-dom'
import {
    Provider
} from 'react-redux'
import store from '../../../createStore'
import MyBids from '../MyBids'

it('MyBids renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Provider store={store}><MyBids auction={{}}/></Provider>, div)
    ReactDOM.unmountComponentAtNode(div)
})