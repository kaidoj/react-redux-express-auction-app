const mongoose = require('../../config/database');

const Schema = mongoose.Schema;
const auctionModel = new Schema({
    productId: { type: String },
    productName: { type: String   },
    productDescription: { type: String },
    productCategory: { type: String },
    categorySlug: { type: String },
    biddingEndDate: {type: Date},
    dateCreated: { type: Date },
    bids: [{ type: Schema.Types.ObjectId, ref: 'Bid' }]
})
module.exports =  mongoose.model('auctions', auctionModel)
