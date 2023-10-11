require("dotenv").config();
import express, { NextFunction } from "express";
import helmet from "helmet";
import cors from "cors";

const app = express();

// const authRoutes = require("./routes/auth.routes");
import allRoutes from "./routes/index";
const apiRoutes = express.Router();

import dbConnect from "./db";
import { errBuilder } from "./utils";

// Helmet
app.use(helmet());

//BODY-PARSER
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//CORS
app.use(cors());

//db connect
dbConnect();

apiRoutes.use("/", allRoutes);

app.use("/api", apiRoutes);

// Error Handler
app.use((err: any, req: any, res: any, next: any) => {
  const final_error = errBuilder(err);
  console.log("final_error");
  console.log(final_error);
  return res.status(final_error.statusCode).send(final_error);
});

export = app;
