const Sequelize = require('sequelize');
const connection = require('./index.js')

const Products = connection.define('products', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER
  }},
  {timestamps: false}
);

const Sales = connection.define('sales', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER
  }},
  {timestamps: false}
);

connection.sync()

module.exports = {
  Products,
  Sales
}