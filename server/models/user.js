const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Define your User Collection Objects Structure
//With datatypes

const user = new Schema({
  //This is where the user will login

  name: String,
  email: String,
  username: String,
  auth0_id: String
});

//So this model will be inserted to the database.
module.exports = mongoose.model("User", user);
