import * as express from "express";
import * as Syntom from "./model";
import { auth } from "../utils/auth";
import { getObject } from "../utils/object";
import { isNewSyntomValid } from "./validators";

export const router = express.Router();

router.get("/syntoms", auth, async (req, res) => {
  try {
    const user = req.user;
    if (!user) {
      return res.status(401).send();
    }

    const allSyntoms = await Syntom.getAll(user.id);
    const syntoms = allSyntoms.map(Syntom.format);
    return res.send(syntoms);
  } catch (e) {
    console.log("Error ", e);
    return res.status(404).send();
  }
});

router.get("/syntoms/:id", auth, async (req, res) => {
  const syntomId = req.params.id;
  try {
    const user = req.user;
    if (!user) {
      return res.status(401).send();
    }

    const syntom = await Syntom.get(syntomId);
    return res.send(Syntom.format(syntom));
  } catch (e) {
    console.log("Error ", e);
    return res.status(404).send();
  }
});

router.post("/syntoms", auth, async (req, res) => {
  const newSyntom = req.body;
  try {
    const user = req.user;
    if (!user) {
      return res.status(401).send();
    }

    if (!isNewSyntomValid(newSyntom)) {
      return res
        .status(400)
        .send({ message: "Por favor, preencha os dados corretamente." });
    }

    const syntom = await Syntom.insert(
      newSyntom.happenedAt,
      newSyntom.durationSeconds,
      newSyntom.observation,
      newSyntom.userId,
      newSyntom.syntomGenericId,
      newSyntom.syntomUserId
    );
    return res.status(201).send(Syntom.format(syntom));
  } catch (e) {
    console.log("Error ", e);
    return res.status(404).send();
  }
});

router.put("/syntoms", auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = [
    "happenedAt",
    "durationSeconds",
    "observation",
    "syntomGenericId",
    "syntomUserId",
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

    const oldSyntom = req.body;
    const updatesToDb = getObject(updates, oldSyntom);
    const updatedSyntom = await Syntom.update(updatesToDb, oldSyntom.id);
    res.send(Syntom.format(updatedSyntom));
  } catch (e) {
    console.log("Error ", e);
    return res.status(404).send();
  }
});

router.delete("/syntoms", auth, async (req, res) => {
  try {
    const user = req.user;
    if (!user) {
      return res.status(401).send();
    }

    const syntomDeleted = await Syntom.remove(req.body.id);
    return res.send(Syntom.format(syntomDeleted));
  } catch (e) {
    console.log("Error ", e);
    return res.status(404).send();
  }
});
