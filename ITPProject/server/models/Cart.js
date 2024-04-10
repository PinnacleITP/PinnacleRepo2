const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  memberID: String,
  game: String,
  image: String,
  price: Number,
});

const CartModel = mongoose.model("carts", CartSchema);
module.exports = CartModel;
