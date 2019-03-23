const db = require('../mongoDB/index.js');

const controller = {
  products: {
    get: (req, res) => {
      db.Products.find({})
      .then((data) => {res.status(200).send(data)})
      .catch((err) => {res.status(404).send(data)})
    },
    post: (req, res) => {
      const {name, price, quantity} = req.body
      db.Products.create({name, price, quantity})
      .then(())
    }
  }
}