import React, {
    Component
} from 'react'
import './scss/App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './components/Header/Header'
import Main from './Main'
import PopupModal from './components/Modal/Modal'

class App extends Component {
    render() {
        return (
            <div id="app">
                <Header />
                <section>
                    <Main />
                </section>
                <PopupModal />
            </div>
        )
    }
}

export default App