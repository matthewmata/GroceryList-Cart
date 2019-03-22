const router = require('express').Router();
const controller = require('./controller.js');

router
  .route('/products')
  .get(controller.products.get)
  .post(controller.products.post)

router
  .route('/sales')
  .get(controller.sales.get)
  .post(controller.sales.post)
  .put(controller.sales.update);

module.exports = router;