import User from "./User";
import Reservation from "./Reservation";
import Tribe from "./Tribe";

export { default as User } from "./User";
export { default as Reservation } from "./Reservation";
export { default as Tribe } from "./Tribe";

const models: IModels = {
  User: User,
  Reservation: Reservation,
  Tribe: Tribe,
};

export default models;
