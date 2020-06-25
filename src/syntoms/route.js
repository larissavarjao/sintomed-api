import * as express from 'express';
import * as Syntom from './model';
import { auth } from '../utils/auth';

export const router = express.Router();

router.get('/syntoms', auth, async (req, res) => {
  try {
    const user = req.user;
    if (!user) {
      return res.status(401).send();
    }

    const syntoms = await Syntom.getAll(user.id);
    return res.send(syntoms);
  } catch (e) {
    console.log('Error ', e);
    return res.status(404).send();
  }
});
