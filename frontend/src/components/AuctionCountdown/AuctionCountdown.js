import React from 'react'
import PropTypes from 'prop-types'
import Countdown from 'react-countdown-now'
 
const Ended = () => <span>Auction has ended!</span>
 
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    return <Ended />
  } else {
    return <span>{hours}:{minutes}:{seconds}</span>
  }
};
 
const AuctionCountdown = (props) => (
    <span>
         <Countdown
            date={props.time}
            renderer={renderer}
        />
    </span>
);

AuctionCountdown.propTypes = {
    time: PropTypes.string.isRequired
}

export default AuctionCountdown