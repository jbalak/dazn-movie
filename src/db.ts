import dotenv from "dotenv";
dotenv.config();
const mongoose = require("mongoose");

const mongoUri = "mongodb://localhost:27017";
mongoose.set("strictQuery", true);
const mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "dazn-movies",
};
export = () => {
  mongoose
    .connect(mongoUri, mongoOptions)
    .then((resp: any) => {
      console.log(
        "Connected to Database: " +
          resp.connection.host +
          "/" +
          mongoOptions.dbName
      );
    })
    .catch((err: any) => {
      console.log("error", err);
    });

  mongoose.connection.on(
    "error",
    console.error.bind(console, "connection error:")
  );
};
