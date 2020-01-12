const mongoose = require('../../config/database');

const dbService = () => {
  const connect = async () => {
    database = mongoose.connection;
    database.on('error', console.error.bind(console, 'connection error:'));
    database.once('open', function() {
        console.log('Mongo connection enstablished')
    });
    return database;
  }
  return {
    connect
  };
};

module.exports = dbService;
