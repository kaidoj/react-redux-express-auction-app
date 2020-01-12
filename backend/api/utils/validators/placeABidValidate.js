const validator = require('validator');
const auctionService = require('../../services/auctions.service');

const placeABidValidator = async (data) => {
    let errors = []

    const auction = await auctionService().fetchById(data.auction)
    if (!auction) {
        errors = [...errors, 'Auction does not exist']
    }

    const endDate = new Date(auction.biddingEndDate)
    if (endDate < new Date()) {
        errors = [...errors, 'Auction has ended']
    }

    if (validator.isEmpty(data.bidAmount)) {
        errors = [...errors, 'Bid amount is required']
    }

    if (!validator.isDecimal(data.bidAmount)) {
        errors = [...errors, 'Bid amount should be decimal']
    }

    if (errors.length > 0) {
        console.log(errors)
        return errors
    }

    return true
}

module.exports = placeABidValidator;