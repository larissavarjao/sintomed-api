import * as express from "express";
import * as SymptomType from "./model";
import { auth } from "../utils/auth";

export const router = express.Router();

router.get("/symptomstypes/:id", auth, async (req, res) => {
  const symptomTypeId = req.params.id;
  try {
    const user = req.user;
    if (!user) {
      return res.status(401).send();
    }

    const symptomStype = await SymptomType.get(symptomTypeId);
    return res.send(SymptomType.format(symptomStype));
  } catch (e) {
    console.log("Error ", e);
    return res.status(404).send();
  }
});

router.get("/symptomstypes", auth, async (req, res) => {
  try {
    const user = req.user;
    if (!user) {
      return res.status(401).send();
    }

    const symptomsTypesUnformatted = await SymptomType.getAll();
    const allSymptomsTypes = symptomsTypesUnformatted.map(SymptomType.format);
    return res.send(allSymptomsTypes);
  } catch (e) {
    console.log("Error ", e);
    return res.status(404).send();
  }
});
