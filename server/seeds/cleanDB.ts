import models from "../models";
import db from "../config/connection";

export default async (modelName: ModelName, collectionName: string) => {
  try {
    console.log("modelName", modelName, "collectionName", collectionName);
    let modelExists = await models[modelName].db.db
      .listCollections({
        name: collectionName,
      })
      .toArray();

    if (modelExists.length) {
      await db.dropCollection(collectionName);
    }
  } catch (err) {
    throw err;
  }
};
