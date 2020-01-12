import React from 'react'
import ReactDOM from 'react-dom'
import AuctionCountdown from '../AuctionCountdown'

it('AuctionCountdown renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<AuctionCountdown time="123123"/>, div)
    ReactDOM.unmountComponentAtNode(div)
})