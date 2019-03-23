const router = require('express').Router();
const controller = require('./controller.js');

router
  .route('/products')
  .get(controller.products.get)
  .post(controller.products.post)
  .delete(controller.products.delete)
  .put(controller.products.update)

router
  .route('/sales')
  .get(controller.sales.get)
  .post(controller.sales.post)
  .delete(controller.products.delete)
  .put(controller.sales.update);

module.exports = router;