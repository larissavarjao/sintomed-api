import * as express from "express";
import * as Symptom from "./model";
import { auth } from "../utils/auth";
import { getObject } from "../utils/object";
import { isNewSymptomValid } from "./validators";

export const router = express.Router();

router.get("/symptoms", auth, async (req, res) => {
  try {
    const user = req.user;
    if (!user) {
      return res.status(401).send();
    }

    const allSymptoms = await Symptom.getAll(user.id);
    const symptoms = allSymptoms.map(Symptom.format);
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

    if (!isNewSymptomValid(newSymptom)) {
      return res
        .status(400)
        .send({ message: "Por favor, preencha os dados corretamente." });
    }

    const symptom = await Symptom.insert(
      newSymptom.happenedAt,
      newSymptom.durationSeconds,
      newSymptom.observation,
      newSymptom.userId,
      newSymptom.symptomGenericId,
      newSymptom.symptomUserId
    );
    return res.status(201).send(Symptom.format(symptom));
  } catch (e) {
    console.log("Error ", e);
    return res.status(404).send();
  }
});

router.put("/symptoms", auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = [
    "happenedAt",
    "durationSeconds",
    "observation",
    "symptomGenericId",
    "symptomUserId",
  ];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid operation" });
  }

  try {
    const user = req.user;
    if (!user) {
      return res.status(401).send();
    }

    const oldSymptom = req.body;
    const updatesToDb = getObject(updates, oldSymptom);
    const updatedSymptom = await Symptom.update(updatesToDb, oldSymptom.id);
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
