import React from 'react'
import ReactDOM from 'react-dom'
import {
    Provider
} from 'react-redux'
import store from '../../../createStore'
import PlaceABid from '../PlaceABid'

it('PlaceABid renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Provider store={store}><PlaceABid time="123123" auction={{}}/></Provider>, div)
    ReactDOM.unmountComponentAtNode(div)
})