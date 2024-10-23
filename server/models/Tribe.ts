import { Schema, model } from "mongoose";
import User from "./User";

const tribeSchema = new Schema<ITribe>({
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

const Tribe = model<ITribe>("Tribe", tribeSchema);

export default Tribe;
