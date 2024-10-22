import mongoose from "mongoose";

type ConncectionObject = {
  isConnected?: number;
};

const connection: ConncectionObject = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("Already connected to database");
    return;
  }
  try {
    const db = await mongoose.connect(process.env.MONGO_URL || "");
    connection.isConnected = db.connections[0].readyState;
    console.log("DB conncected Successfully");
  } catch (error) {
    console.log("Databse connection failed", error);
    process.exit(1);
  }
}

export default dbConnect;
