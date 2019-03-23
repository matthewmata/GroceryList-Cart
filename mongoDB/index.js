const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/store');

const Schema = mongoose.Schema;

const productsSchema = new Schema({
  name: String,
  price: Number,
  quantity: String
});

const salesSchema = new Schema({
	name: String,
	quantity: Number
})

const Products = mongoose.model('Products', productsSchema);
const Sales = mongoose.model('Products', salesSchema);

module.exports = { Products, Sales }