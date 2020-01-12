import React from 'react'
import PropType from 'prop-types'

const Loading = (props) => (
    <div>
        {!props.hideText?' Loading. Please wait...':''}
    </div>
)

Loading.propTypes = {
    hideText: PropType.bool
}

export default Loading