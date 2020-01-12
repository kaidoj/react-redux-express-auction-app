const mongoose = require('../../config/database');

const Schema = mongoose.Schema;
const syncModel = new Schema({
    lastUpdate: { type: Date }
})
module.exports =  mongoose.model('sync', syncModel)
