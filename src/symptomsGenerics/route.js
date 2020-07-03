import * as express from "express";
import * as SymptomGeneric from "./model";
import { auth } from "../utils/auth";

export const router = express.Router();

router.get("/symptomsgenerics/:id", auth, async (req, res) => {
  const symptomGenericId = req.params.id;
  try {
    const user = req.user;
    if (!user) {
      return res.status(401).send();
    }

    const symptomGeneric = await SymptomGeneric.get(symptomGenericId);
    return res.send(SymptomGeneric.format(symptomGeneric));
  } catch (e) {
    console.log("Error ", e);
    return res.status(404).send();
  }
});

router.get("/symptomsgenerics", auth, async (req, res) => {
  try {
    const user = req.user;
    if (!user) {
      return res.status(401).send();
    }

    const symptomsGenericUnformatted = await SymptomGeneric.getAll();
    const allSymptomsGenerics = symptomsGenericUnformatted.map(
      SymptomGeneric.format
    );
    return res.send(allSymptomsGenerics);
  } catch (e) {
    console.log("Error ", e);
    return res.status(404).send();
  }
});
