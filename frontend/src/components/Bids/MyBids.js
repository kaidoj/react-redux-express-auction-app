import React, {
    Component
} from 'react'
import {
    connect
} from 'react-redux'
import {
    Table
} from 'reactstrap'
import PropTypes from 'prop-types'

class MyBids extends Component {
    render() {
        const {
            bids
        } = this.props

        return (
            <div>
                <h6>My bids for current auction</h6>
                <Table striped>
                    <thead>
                        <tr>
                            <th>Bid amount</th>
                            <th>Date created</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bids.map((bid, i) => {
                            return (
                                <tr key={i}>
                                    <td>{bid.amount} &euro;</td>
                                    <td>{bid.dateCreated}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
        )
    }
}

MyBids.propTypes = {
    auction: PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => {
    return {
        fetching: state.bids.fetching,
        bids: state.bids.bids.filter((bid) => bid.auction === ownProps.auction._id)
    }
}

export default connect(
    mapStateToProps,
    null
)(MyBids)