import * as express from "express";
import * as Symptom from "./model";
import { auth } from "../utils/auth";
import { transformToSnakeCase } from "../utils/object";
import { isSymptomValid, isSymptomValidToUpdate } from "./validators";

export const router = express.Router();

router.get("/symptoms", auth, async (req, res) => {
  try {
    const user = req.user;
    if (!user) {
      return res.status(401).send();
    }

    const symptoms = await Symptom.getAll(user.id);
    return res.send(symptoms);
  } catch (e) {
    console.log("Error ", e);
    return res.status(404).send();
  }
});

router.get("/symptoms/:id", auth, async (req, res) => {
  const symptomId = req.params.id;
  try {
    const user = req.user;
    if (!user) {
      return res.status(401).send();
    }

    const symptom = await Symptom.get(symptomId);
    return res.send(Symptom.format(symptom));
  } catch (e) {
    console.log("Error ", e);
    return res.status(404).send();
  }
});

router.post("/symptoms", auth, async (req, res) => {
  const newSymptom = req.body;
  try {
    const user = req.user;
    if (!user) {
      return res.status(401).send();
    }

    if (!isSymptomValid(newSymptom)) {
      return res
        .status(400)
        .send({ message: "Por favor, preencha os dados corretamente." });
    }

    const symptomSnakeCase = transformToSnakeCase(newSymptom);
    const symptom = await Symptom.insert(symptomSnakeCase);
    return res.status(201).send(Symptom.format(symptom));
  } catch (e) {
    console.log("Error ", e);
    return res.status(404).send();
  }
});

router.put("/symptoms", auth, async (req, res) => {
  const id = req.body.id;
  const updateSymptom = req.body;

  if (!isSymptomValidToUpdate(updateSymptom)) {
    return res
      .status(400)
      .send({ message: "Por favor, preencha os dados corretamente." });
  }

  delete updateSymptom.id;
  delete updateSymptom.userId;
  delete updateSymptom.createdAt;

  try {
    const user = req.user;
    if (!user) {
      return res.status(401).send();
    }

    const objToUpdate = transformToSnakeCase(updateSymptom);

    const updatedSymptom = await Symptom.update(objToUpdate, id);
    res.send(Symptom.format(updatedSymptom));
  } catch (e) {
    console.log("Error ", e);
    return res.status(404).send();
  }
});

router.delete("/symptoms", auth, async (req, res) => {
  try {
    const user = req.user;
    if (!user) {
      return res.status(401).send();
    }

    const symptomDeleted = await Symptom.remove(req.body.id);
    return res.send(Symptom.format(symptomDeleted));
  } catch (e) {
    console.log("Error ", e);
    return res.status(404).send();
  }
});
