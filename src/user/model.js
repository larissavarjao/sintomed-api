import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import db from '../../data/db';

export const get = async (id) => {
  return db('users').where({ id }).first();
};

export const getByEmail = async (email) => {
  return db('users').where({ email }).first();
};

export const insert = async (firstName, lastName, email, password, pacientName) => {
  const encryptedPassword = await bcrypt.hash(password, await bcrypt.genSalt());
  const newUserCreated = (
    await db('users')
      .insert({
        first_name: firstName,
        last_name: lastName,
        email,
        password: encryptedPassword,
        created_at: new Date(),
        pacient_name: pacientName,
      })
      .returning('*')
  )[0];

  return newUserCreated;
};

export const update = async (objToUpdate, id) => {
  return db('users')
    .update({ ...objToUpdate, updated_at: new Date() })
    .where({ id });
};

export const remove = async (id) => {
  return db('users').update({ deleted_at: new Date() }).where({ id });
};

export const generateAuthToken = (id) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET);

  return token;
};

export const format = (user) => {
  return {
    id: user.id,
    firstName: user.first_name,
    lastName: user.last_name,
    email: user.email,
    createdAt: user.created_at,
    updatedAt: user.updated_at,
    deletedAt: user.deleted_at,
  };
};

export const comparePassword = async (password, userPassword) => {
  return await bcrypt.compare(password, userPassword);
};
