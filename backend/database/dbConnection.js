import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "RESTAURANT",
  })
  .then(() => {
    console.log("Mai Ninja Hattori...!!");
    })
    .catch((err) => {
        console.log(`Some error occurred while connecting to database ${err}`);
    });
  };