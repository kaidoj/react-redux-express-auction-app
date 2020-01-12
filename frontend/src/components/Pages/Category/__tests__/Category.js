import React from 'react'
import ReactDOM from 'react-dom'
import {
    Provider
} from 'react-redux'
import store from '../../../../createStore'
import Category from '../Category'
import { MemoryRouter } from 'react-router-dom'

it('Category renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
    <Provider store={store}>
        <MemoryRouter>
            <Category match={{params: {id: 1}, isExact: true, path: "", url: ""}}/>
        </MemoryRouter>
    </Provider>, div)
    ReactDOM.unmountComponentAtNode(div)
})