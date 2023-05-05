require("dotenv").config();
const mongoose = require("mongoose");

const connection = mongoose.connect(process.env.Url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = {
  connection,
};
