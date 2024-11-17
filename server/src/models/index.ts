import User, { IUser } from "./User";
import Reservation, { IReservation } from "./Reservation";
import Tribe, { ITribe } from "./Tribe";
import { Document, Model, Types } from "mongoose";

export { default as User } from "./User";
export { default as Reservation } from "./Reservation";
export { default as Tribe } from "./Tribe";

export type IModels = {
  User: Model<
    IUser,
    {},
    {},
    {},
    Document<unknown, {}, IUser> &
      IUser & {
        _id: Types.ObjectId;
      },
    any
  >;
  Reservation: Model<
    IReservation,
    {},
    {},
    {},
    Document<unknown, {}, IReservation> &
      IReservation & {
        _id: Types.ObjectId;
      },
    any
  >;
  Tribe: Model<
    ITribe,
    {},
    {},
    {},
    Document<unknown, {}, ITribe> &
      ITribe & {
        _id: Types.ObjectId;
      },
    any
  >;
};

const models: IModels = {
  User: User,
  Reservation: Reservation,
  Tribe: Tribe,
};

export default models;
