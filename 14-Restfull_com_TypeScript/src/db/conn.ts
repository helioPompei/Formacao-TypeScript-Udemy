import mongoose from "mongoose";
import config from "config";

async function connectToMongo() {
  const dbURL = config.get<string>("dbURL");
  try {
    await mongoose.connect(dbURL);
    console.log("Conectou ao mongoose");
  } catch (err: any) {
    console.log("err: ", err.message);
  }
}

export default connectToMongo;
