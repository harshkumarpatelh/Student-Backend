const Sequelize = require('sequelize');
const env = process.env.NODE_ENV;
const config = require(__dirname + '/../config/config.json')[env];

const sequelize = new Sequelize(config);

module.exports = sequelize;
