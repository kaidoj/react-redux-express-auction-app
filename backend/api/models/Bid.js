const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const bidsModel = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    auction: { type: Schema.Types.ObjectId, ref: 'Auction' },
    amount: { type: Number },
    dateCreated: { type: Date }
})
module.exports =  mongoose.model('bids', bidsModel)
