const { Schema, model } = require("mongoose");

const tribeSchema = new Schema({
  //   name: {
  //     type: String,
  //     required: true,
  //     trim: true,
  //   },
});

const Tribe = model("Tribe", tribeSchema);

module.exports = Tribe;
