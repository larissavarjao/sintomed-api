const request = require('supertest');
import { app } from '../../../src/index';

export const createUser = (newUser) => {
  return request(app).post('/users').send(newUser);
};

export const loginUser = (email, password) => {
  return request(app).post('/auth').send({ email, password });
};

export const updateUser = (firstName, lastName, email, token) => {
  return request(app)
    .put('/users')
    .set('Authorization', `Bearer ${token}`)
    .send({ firstName, lastName, email });
};

export const deleteUser = (token) => {
  return request(app).delete('/users').set('Authorization', `Bearer ${token}`);
};
