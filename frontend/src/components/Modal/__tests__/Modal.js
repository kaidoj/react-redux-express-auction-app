import React from 'react'
import ReactDOM from 'react-dom'
import Modal from '../Modal'
import store from '../../../createStore'
import {
    Provider
} from 'react-redux'

it('Modal renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Provider store={store}><Modal /></Provider>, div)
    ReactDOM.unmountComponentAtNode(div)
})