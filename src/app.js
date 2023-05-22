import dotenv from "dotenv";
dotenv.config();
import express from "express";
import path from "path";
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";
import cors from "cors";
import cookieParser from "cookie-parser";

import { fileURLToPath } from "url";
import { corsOptionsDelegate } from "../src/config/cors.js";
import routes from "../src/routes/index.js";
import { dbConnection } from "../src/config/db.js";

const app = express();

//Database
dbConnection();

//middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
//Cors settings
app.use(cors(corsOptionsDelegate));
app.use(cookieParser());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Static Files
app.use(express.static(path.join(__dirname, "../build")));

//Routes
app.use(routes);
app.get("*", (req, res) => {
  res.sendFile("index.html");
});

app.use((req, res, next) => {
  return res
    .status(404)
    .send({ errors: [{ route: `${req.url}`, message: "Not Found." }] });
});

app.use((err, req, res, next) => {
  console.log(err);
  return res.status(500).send({ error: err });
});

app.use(function (err, req, res, next) {
  console.log(err);

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

export default app;
