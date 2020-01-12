import React, {
    Component
} from 'react'
import {
    connect
} from 'react-redux'
import PropTypes from 'prop-types'
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Button,
    Row,
    Col
} from 'reactstrap'
import './scss/style.scss'
import {
    fetchAuctions,
    fetchAuctionsByCategory
} from './actions/fetchAuctions'
import Loading from '../Loading/Loading'
import AuctionCountdown from '../AuctionCountdown/AuctionCountdown'
import {
    openModal
} from '../Modal/actions/modal'
import PlaceABid from '../PlaceABid/PlaceABid'

class Auctions extends Component {

    constructor(props) {
        super(props)

        this.handleMakeBidClick = this.handleMakeBidClick.bind(this)
    }

    handleMakeBidClick(auction) {
        this.props.dispatch(openModal(
            'Place a bid',
            <PlaceABid auction={auction}/>
        ))
    }

    render() {
        const {
            fetching,
            auctions
        } = this.props;

        return (
            <div>
                {fetching?<Loading />:
                <Row>
                    {auctions.map((row, i) => {
                        return (
                            <Col sm="6" key={i}>
                                <Card>
                                    <CardBody>
                                        <CardTitle>{row.productName}</CardTitle>
                                        <CardSubtitle>Time left: <AuctionCountdown time={row.biddingEndDate} /></CardSubtitle>
                                        <CardText>{row.productDescription}</CardText>
                                        <Button onClick={() => this.handleMakeBidClick(row)}>Place a bid</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>}
            </div>
        )
    }
}

Auctions.propTypes = {
    category: PropTypes.string
}

const mapStateToProps = (state) => {
    return {
        auctions: state.auctions.auctions,
        fetching: state.auctions.fetching
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchAuctions: dispatch(ownProps.category ? fetchAuctionsByCategory(ownProps.category) : fetchAuctions()),
        dispatch: dispatch
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Auctions)