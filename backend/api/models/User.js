const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userModel = new Schema({
    identifier: { type: String },
    firstName: { type: String   },
    lastName: { type: String },
    dateCreated: { type: Date },
    bids: [{ type: Schema.Types.ObjectId, ref: 'Bid' }]
})
module.exports =  mongoose.model('users', userModel)
