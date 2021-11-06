const mongoose = require("mongoose");

const SuggestionSchema = new mongoose.Schema({
  _id: {
    type: "String",
  },
  id: {
    type: "String",
  },
  description: {
    type: "String",
  },
  category: {
    type: "String",
  },
  filter: {
    type: "String",
  },
  count: {
    type: "Number",
  },
});

module.exports = mongoose.model("Suggestion", SuggestionSchema);
