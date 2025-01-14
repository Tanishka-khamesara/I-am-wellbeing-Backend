const mongoose = require("mongoose");

const NeedsSchema = new mongoose.Schema({
    nameneeds: { type: String, required: true },
  emailneeds: { type: String, required: true },
  need: { type: String, required: true },
})

module.exports = mongoose.model('Need', NeedsSchema);