import React from 'react'
import ReactDOM from 'react-dom'
import Breadcrumbs from '../Breadcrumbs'
import {
    Provider
} from 'react-redux'
import store from '../../../createStore'
import { MemoryRouter } from 'react-router-dom'

it('Breadcrumbs renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Provider store={store}><MemoryRouter><Breadcrumbs category={{}}/></MemoryRouter></Provider>, div)
    ReactDOM.unmountComponentAtNode(div)
})