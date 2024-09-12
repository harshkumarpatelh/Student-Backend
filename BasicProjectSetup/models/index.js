const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

// initialise sequelize object and connecting to database
const sequelize = new Sequelize(config);

module.exports = sequelize;
