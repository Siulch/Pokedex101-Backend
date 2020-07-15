require('dotenv').config();

module.exports = {
  node_dev: process.env.NODE_ENV !== 'production',
  port: process.env.PORT || 8000,
  mongo: {
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbName: process.env.DB_NAME,
    dbHost: process.env.DB_HOST,
  },
};
