import * as express from "express";
import * as SyntomType from "./model";
import { auth } from "../utils/auth";

export const router = express.Router();

router.get("/syntomstypes/:id", auth, async (req, res) => {
  const syntomTypeId = req.params.id;
  try {
    const user = req.user;
    if (!user) {
      return res.status(401).send();
    }

    const syntomStype = await SyntomType.get(syntomTypeId);
    return res.send(SyntomType.format(syntomStype));
  } catch (e) {
    console.log("Error ", e);
    return res.status(404).send();
  }
});

router.get("/syntomstypes", auth, async (req, res) => {
  try {
    const user = req.user;
    if (!user) {
      return res.status(401).send();
    }

    const syntomsTypesUnformatted = await SyntomType.getAll();
    const allSyntomsTypes = syntomsTypesUnformatted.map(SyntomType.format);
    return res.send(allSyntomsTypes);
  } catch (e) {
    console.log("Error ", e);
    return res.status(404).send();
  }
});
