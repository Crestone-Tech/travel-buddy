import { Schema, model } from "mongoose";

export type IUser = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
};

const userSchema = new Schema<IUser>({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
});

const User = model<IUser>("User", userSchema);

export default User;
