const mongoose = require("mongoose");

const Contact = new mongoose.Schema({
  email: { type: String, required: true },
  message: { type: String, required: true, min: 10, max: 300 },
});
module.exports = mongoose.model("contact", Contact);
