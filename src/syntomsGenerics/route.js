import * as express from "express";
import * as SyntomGeneric from "./model";
import { auth } from "../utils/auth";

export const router = express.Router();

router.get("/syntomsgenerics/:id", auth, async (req, res) => {
  const syntomGenericId = req.params.id;
  try {
    const user = req.user;
    if (!user) {
      return res.status(401).send();
    }

    const syntomGeneric = await SyntomGeneric.get(syntomGenericId);
    return res.send(SyntomGeneric.format(syntomGeneric));
  } catch (e) {
    console.log("Error ", e);
    return res.status(404).send();
  }
});

router.get("/syntomsgenerics", auth, async (req, res) => {
  try {
    const user = req.user;
    if (!user) {
      return res.status(401).send();
    }

    const syntomsGenericUnformatted = await SyntomGeneric.getAll();
    const allSyntomsGenerics = syntomsGenericUnformatted.map(SyntomGeneric.format);
    return res.send(allSyntomsGenerics);
  } catch (e) {
    console.log("Error ", e);
    return res.status(404).send();
  }
});
