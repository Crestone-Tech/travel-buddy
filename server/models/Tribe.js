const { Schema, model } = require("mongoose");
const User = require("./User");

const tribeSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  members: [
    {
      firstName: { type: String },
      lastName: { type: String },
    },
  ],
});

const Tribe = model("Tribe", tribeSchema);

module.exports = Tribe;
