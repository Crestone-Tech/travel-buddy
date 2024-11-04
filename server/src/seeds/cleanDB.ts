import models from "../models";
import db from "../config/connection";

type ModelName = "User" | "Reservation" | "Tribe";

export default async (modelName: ModelName, collectionName: string) => {
  try {
    await db.dropCollection(collectionName);
  } catch (err) {
    throw err;
  }
};
