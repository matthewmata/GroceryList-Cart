const db = require('../mongoDB/index.js');

const controller = {
  products: {
    get: (req, res) => {
      db.Products.find({})
      .then((data) => {res.status(200).send(data)})
      .catch((err) => {res.status(404).send(err)})
    },
    post: (req, res) => {
      const {name, price, quantity} = req.body
      db.Products.create({name, price, quantity})
      .then(() => {res.status(201).send()})
      .catch((err) => {res.status(404).send(err)})
    },
    delete: (req, res) => {
      const { name } = req.query
      db.Products.deleteOne({ name })
      .then(() => {res.status(202).send()})
      .catch((err) => {res.status(404).send(err)})
    },
    update: (req, res) => {
      const { name } = req.body

    }
  },
  sales: {
    get: (req, res) => {

    },
    post: (req, res) => {

    },
    delete: (req, res) => {

    },
    update: (req, res) => {

    }
  }  
}

1314
1642