import React from 'react'
import ReactDOM from 'react-dom'
import {
    Provider
} from 'react-redux'
import store from '../../../createStore'
import Auctions from '../Auctions'

it('Auctions renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Provider store={store}><Auctions/></Provider>, div)
    ReactDOM.unmountComponentAtNode(div)
})