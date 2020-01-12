import React from 'react'
import ReactDOM from 'react-dom'
import {
    Provider
} from 'react-redux'
import store from '../../../createStore'
import Header from '../Header'
import { MemoryRouter } from 'react-router-dom'

it('Header renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Provider store={store}><MemoryRouter><Header/></MemoryRouter></Provider>, div)
    ReactDOM.unmountComponentAtNode(div)
})