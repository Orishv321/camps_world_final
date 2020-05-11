const mongoose = require("mongoose");
require("dotenv/config");
mongoose.set("useCreateIndex", true);
const db = mongoose.connect(
  process.env.DB_connect,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connection to mongoosdb");
  },
);
module.exports = db;
