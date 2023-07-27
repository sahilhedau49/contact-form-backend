const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    default: 4.5,
  },
  emailid: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Contact", contactSchema);
