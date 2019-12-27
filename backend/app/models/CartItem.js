const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const Product = require("./Product");
const Cart = require("./Cart");
const refIsValid = require("../middleware/refIsValid");

const cartItemSchema = mongoose.Schema({
  name: { type: String },
  productRef: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true
  },
  cartRef: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cart",
    required: true
  },
  price: { type: Number, default: 0 },
  imgUrl: { type: String },
  amount: { type: Number, required: true },
  total: { type: Number, default: 0 },
  active: { type: Boolean, default: true },
  uniqueName: { type: String, unique: true }
});

cartItemSchema.path("productRef").validate((value, respond) => {
  return refIsValid(value, respond, Product);
}, "Invalid product ref.");

cartItemSchema.path("cartRef").validate((value, respond) => {
  return refIsValid(value, respond, Cart);
}, "Invalid cart ref.");

cartItemSchema.path("price").get(function(num) {
  return num.toFixed(2);
});

cartItemSchema.plugin(uniqueValidator);

module.exports = mongoose.model("cartItem", cartItemSchema);
