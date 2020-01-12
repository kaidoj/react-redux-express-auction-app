const mongoose = require('mongoose');
const connection = require('./connection');

let database;

switch (process.env.NODE_ENV) {
  case 'production':
      mongoose.connect(connection.production.db, {
        auth: {
            user: connection.production.user,
            password: connection.production.pass
        },
        useNewUrlParser: true
      });
    break;
  case 'testing':
    mongoose.connect(connection.testing.db, {
      auth: {
          user: connection.testing.user,
          password: connection.testing.pass
      },
      useNewUrlParser: true
    });
    break;
  default:
  try {
    mongoose.connect(connection.development.db, {
      useNewUrlParser: true
    });
  } catch(e) {
    console.log(e)
  }
}

module.exports = mongoose;
