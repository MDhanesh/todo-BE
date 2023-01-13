const mongoose = require("mongoose");

const todoSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("TodoList", todoSchema);
