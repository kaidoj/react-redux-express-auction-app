import React from 'react'
import ReactDOM from 'react-dom'
import {
    Provider
} from 'react-redux'
import {
    BrowserRouter
} from 'react-router-dom'
import ReduxToastr from 'react-redux-toastr'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

import store from './createStore'

ReactDOM.render(
    <Provider store={store}>
        <div>
        <BrowserRouter>
            <App />
        </BrowserRouter>
        <ReduxToastr 
            timeOut={4000}
            newestOnTop={false}
            preventDuplicates
            position="top-right"
            transitionIn="fadeIn"
            transitionOut="fadeOut"
            progressBar
            closeOnToastrClick/>
        </div>
    </Provider>,
    document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()