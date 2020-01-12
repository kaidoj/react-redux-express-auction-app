import React, {
    Component
} from 'react'
import {
    connect
} from 'react-redux'
import PropTypes from 'prop-types'
import {
    toastr
} from 'react-redux-toastr'
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Row,
    Col,
    FormGroup,
    Label,
    Input,
    Button,
    Alert
} from 'reactstrap'
import AuctionCountdown from '../AuctionCountdown/AuctionCountdown'
import {
    validateForm
} from './utils/validateForm'
import {
    placeABid
} from './actions/placeABid'
import Authenticate from '../Authenticate/Authenticate'
import MyBids from '../Bids/MyBids'
import {
    getToken
} from '../Authenticate/utils/sessions/sessionStorage';

class PlaceABid extends Component {

    constructor(props) {
        super(props)

        this.state = {
            amount: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({
            amount: e.target.value
        })
    }

    async handleSubmit(e) {
        e.preventDefault()
        const {
            auction,
            token
        } = this.props

        const endDate = new Date(auction.biddingEndDate)
        if (endDate < new Date()) {
            toastr.error('Error', 'Auction has ended')
            return false
        }

        const sessionToken = getToken()

        const data = { 
            bidAmount: this.state.amount,
            auction: this.props.auction._id,
            token: sessionToken ? sessionToken : token
        }

        const formValid = await validateForm(data)
        if (formValid) {
            this.props.dispatch(placeABid(data))
            this.setState({
                amount: ''
            })
        }
    }

    render() {
        const {
            auction,
            authenticated,
            user
        } = this.props

        return (
            <div>
            <Row>
                <Col>
                    <Card>
                        <CardBody>
                            <CardTitle>{auction.productName}</CardTitle>
                            <CardSubtitle>Time left: <AuctionCountdown time={auction.biddingEndDate} /></CardSubtitle>
                            <CardText>{auction.productDescription}</CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    {authenticated?
                    <form onSubmit={(e) => this.handleSubmit(e)}>
                        <FormGroup>
                            Authenticated as <strong>{user.firstName + ' ' + user.lastName}</strong>
                        </FormGroup>
                        <FormGroup>
                            <Label for="bidAmount">Bid amount (&euro;)</Label>
                            <Input 
                                type="text" 
                                name="bidAmount" 
                                id="bidAmount" 
                                onChange={this.handleChange}
                                value={this.state.amount} 
                                placeholder="Enter bid amount" />
                        </FormGroup>
                        <FormGroup>
                            <Button type="submit">Place a bid</Button>
                        </FormGroup>
                    </form>: 
                    <div>
                        <Alert  color="warning">To place a bid you have to authenticate first.</Alert>
                        <Authenticate />
                    </div>}
                </Col>
            </Row>
            <div>
                <MyBids auction={auction}/>
            </div>
        </div>
        )
    }
}

PlaceABid.propTypes = {
    auction: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
    return {
        authenticated: state.auth.authenticated,
        user: state.auth.user,
        token: state.auth.token
    }
}

export default connect(
    mapStateToProps,
    null
)(PlaceABid)