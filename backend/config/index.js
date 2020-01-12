const privateRoutes = require('./routes/privateRoutes');
const publicRoutes = require('./routes/publicRoutes');
const auctionsRoutes = require('./routes/auctionsRoutes');
const bidsRoutes = require('./routes/bidsRoutes');

const config = {
  migrate: false,
  privateRoutes,
  publicRoutes,
  auctionsRoutes,
  bidsRoutes,
  port: process.env.PORT || '3002',
  externalApiUrl: 'https://external.api',
  syncTime: 1,
  tokenExpire: 86400 //24 hours
};

module.exports = config; 
