import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import { router as userRouter } from "./user/route";
import { router as symptomsTypesRouter } from "./symptomsTypes/route";
import { router as symptomsGenericsRouter } from "./symptomsGenerics/route";
import { router as symptomsRouter } from "./symptoms/route";

export const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(userRouter);
app.use(symptomsTypesRouter);
app.use(symptomsGenericsRouter);
app.use(symptomsRouter);

const port = process.env.PORT || 4444;

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => {
    console.log("Listening on port " + port);
  });
}
