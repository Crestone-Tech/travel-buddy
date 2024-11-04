declare global {
  namespace mongoose {
    type QueryUsersContext = {
      user: HydratedDocument<IUser>;
    };
  }
}
