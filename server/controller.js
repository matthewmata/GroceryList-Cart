const Models = require('../database/models.js');

const controller = {
  products: {
    get : (req, res) => {
      Models.Products.findAll({})
      .then((data) => {res.status(200).send(data)})
      .catch((err) => {res.status(404).send(err)})
    },
    post: (req, res) => {
      const { name, price} = req.body
      Models.Products.create({ name, price })
      .then(() => {res.status(201).send()})
      .catch((err) => {res.status(404).send(err)})
    }
  },
  sales: {
    get: (req, res) => {
      Models.Sales.findAll({})
      .then((data) => {res.status(200).send(data)})
      .catch((err) => {res.status(404).send(err)})
    },
    post: (req, res) => {
      const { name, quantity} = req.body
      Models.Sales.create({ name, quantity })
      .then(() => {res.status(201).send()})
      .catch((err) => {res.status(404).send(err)})
    },
    update: (req, res) => {
      const {name, quantity} = req.body;
      Models.Sales.update({name, quantity}, {where : {name}})
      res.status(200).send('test')
      .catch((err) => {res.status(404).send(err)})
    },
  }
}

module.exports = controller;