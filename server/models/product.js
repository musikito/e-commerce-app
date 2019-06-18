const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Need an id, name, description, price,
//Id is created by default in mongodb
const product = new Schema({
  name: String,
  description: String,
  price: Number
});

/**
 * To create a model, use the Schema model method,
 * with the name of model as the first argument, and the object as the second argument. Then export it.
 */
//To create a model, use the name of the model, and the schema with the properties of the model
// that  wil be inserted to the  database.
module.exports = mongoose.model("Product", product);
