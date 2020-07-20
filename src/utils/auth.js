import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";
import * as User from "../user/model";

export const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "HeRmiONeGrangErBeTTerTHENHaRRyPoTteR"
    );
    const user = await User.get(decoded.id);

    if (user && user.deleted_at === null) {
      req.user = user;
    }

    next();
  } catch (e) {
    console.log(e);
    res.status(401).send({ error: "Please authenticate!" });
  }
};

export const bcryptPassword = async (password) =>
  await bcrypt.hash(password, await bcrypt.genSalt());
