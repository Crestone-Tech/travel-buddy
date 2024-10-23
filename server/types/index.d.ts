declare global {}
type IReservation = {
  title: string;
  category: string;
  description: string;
  country: string;
  town: string;
  startDate: Date;
  endDate: Date;
  status: string;
  provider: string;
  transportationType: string;
  price: number;
  priceCurrency: string;
};

type ITribe = {
  name: string;
  members: ITribeMember[];
};

type ITribeMember = {
  firstName: string;
  lastName: string;
};

type IUser = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
};

type IModels = {
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

type ModelName = "User" | "Reservation" | "Tribe";

type QueryByIdArgs = {
  _id: string;
};

type QueryUsersArgs = {
  limit?: number;
};

type QueryUsersContext = {
  user: HydratedDocument<IUser>;
};

type QueryLoginArgs = {
  username: string;
  password: string;
};
