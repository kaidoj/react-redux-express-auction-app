import React from 'react'
import {
    Switch,
    Route
} from 'react-router-dom'

import Home from './components/Pages/Home/Home'
import Category from './components/Pages/Category/Category'

/**
 * This is router component.
 * This handles all the routing
 */
const Main = (props) => (
    <main className="container-fluid">
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/:category" component={Category}/>
        </Switch>
  </main>
)

export default Main