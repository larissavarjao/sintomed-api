import * as express from "express";
import * as User from "./model";
import { auth } from "../utils/auth";
import { getObject } from "../utils/object";
import { isValidEmail } from "../utils/email";
import { isNewUserValid, isUserLoginValid } from "./validators";

export const router = express.Router();

router.post("/users", async (req, res) => {
  const newUser = req.body;
  console.log("ENTREI", newUser);

  if (!isNewUserValid(newUser))
    return res.status(400).send({ message: "Email não é válido." });

  const userAlreadyHasEmail = await User.getByEmail(newUser.email);
  if (userAlreadyHasEmail) {
    return res.status(400).send({ message: "Email já está em uso." });
  }

  try {
    const user = await User.insert(
      newUser.firstName,
      newUser.lastName,
      newUser.email,
      newUser.password,
      newUser.pacientName
    );
    console.log({ user });

    return res.status(201).send(User.format(user));
  } catch (e) {
    console.error(e);
    return res
      .status(400)
      .send({ message: "Ocorreu um erro, tente novamente mais tarde." });
  }
});

router.post("/auth", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!isUserLoginValid(email, password))
    return res.status(401).send({ error: "Unable to login" });

  try {
    const user = await User.getByEmail(email);
    if (!user) {
      return res.status(401).send({ error: "Unable to login" });
    }

    const isMatch = await User.comparePassword(password, user.password);
    if (!isMatch) {
      return res.status(401).send({ error: "Unable to login" });
    }

    const token = User.generateAuthToken(user.id);
    res.send({ user: User.format(user), token });
  } catch (e) {
    console.log("Error", e);
    res.sendStatus(400);
  }
});

router.put("/users", auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["firstName", "lastName", "email"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid operation" });
  }

  if (req.body.email && !isValidEmail(req.body.email)) {
    return res.sendStatus(400);
  }

  try {
    const user = req.user;
    if (!user) {
      return res.status(401).send();
    }
    const updatesToDb = getObject(updates, req.body);
    await User.update(updatesToDb, user.id);
    res.send(User.format(user));
  } catch (e) {
    console.log("Error", e);
    return res.status(400).send();
  }
});

router.delete("/users", auth, async (req, res) => {
  try {
    const user = req.user;
    if (!user) {
      return res.status(401).send();
    }
    const userRemoved = await User.remove(user.id);
    res.send(User.format(userRemoved));
  } catch (e) {
    console.log("Error ", e);
    return res.status(404).send();
  }
});
