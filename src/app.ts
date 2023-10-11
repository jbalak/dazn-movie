require("dotenv").config();
import express from "express";
import helmet from "helmet";
import cors from "cors";

const app = express();

// const authRoutes = require("./routes/auth.routes");
import allRoutes from "./routes/index";
const apiRoutes = express.Router();

import dbConnect from "./db";

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
// app.use(checkError);

export = app;
