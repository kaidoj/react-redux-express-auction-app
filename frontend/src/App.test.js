import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {
  Provider
} from 'react-redux'
import store from './createStore'
import { MemoryRouter } from 'react-router-dom'

it('App renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Provider store={store}><MemoryRouter><App /></MemoryRouter></Provider>, div)
  ReactDOM.unmountComponentAtNode(div)
})
