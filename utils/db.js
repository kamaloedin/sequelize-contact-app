const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sqlz_contact', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
