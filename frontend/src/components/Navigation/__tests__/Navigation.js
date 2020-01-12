import React from 'react'
import ReactDOM from 'react-dom'
import {
    Provider
} from 'react-redux'
import store from '../../../createStore'
import Navigation from '../Navigation'
import { MemoryRouter } from 'react-router-dom' 

it('Navigation renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Provider store={store}><MemoryRouter><Navigation auction={{}}/></MemoryRouter></Provider>, div)
    ReactDOM.unmountComponentAtNode(div)
})