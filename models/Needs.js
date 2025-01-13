const mongoose = require("mongoose");

const NeedsSchema = new mongoose.Schema({
    name: { type: String, required: true },
  email: { type: String, required: true },
  need: { type: String, required: true },
})

module.exports = mongoose.model('Need', NeedsSchema);