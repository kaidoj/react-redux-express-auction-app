const development = {
  db: 'mongodb://@mongo:27017/auction-app',
  user: 'root',
  pass: ''
};

const testing = {
  db: 'mongodb://192.168.99.100:27017/auction-app',
  user: 'root',
  pass: ''
};

const production = {
  db: 'mongodb://'+process.env.DB_HOST || '192.168.99.100'+':27017/'+process.env.DB_NAME,
  user: process.env.DB_NAME,
  pass: process.env.DB_PASS
};

module.exports = {
  development,
  testing,
  production,
};
