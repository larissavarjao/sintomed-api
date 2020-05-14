const request = require('supertest');
import { app } from '../../../src/index';

export const createTravel = (newTravel, token) => {
  return request(app).post('/travels').set('Authorization', `Bearer ${token}`).send(newTravel);
};

export const getAllTravels = (userId, token) => {
  return request(app)
    .get(`/users/${userId}/travels`)
    .set('Authorization', `Bearer ${token}`)
    .send();
};

export const getTravel = (id, token) => {
  return request(app).get(`/travels/${id}`).set('Authorization', `Bearer ${token}`).send();
};

export const updateTravel = (title, startDate, endDate, id, token) => {
  return request(app)
    .put(`/travels/${id}`)
    .set('Authorization', `Bearer ${token}`)
    .send({ title, startDate, endDate });
};

export const deleteTravel = (id, token) => {
  return request(app).delete(`/travels/${id}`).set('Authorization', `Bearer ${token}`);
};
