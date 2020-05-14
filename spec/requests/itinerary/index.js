const request = require('supertest');
import { app } from '../../../src/index';

export const createItinerary = (newItinerary, token) => {
  return request(app)
    .post('/itineraries')
    .set('Authorization', `Bearer ${token}`)
    .send(newItinerary);
};

export const getAllItineraries = (travelId, token) => {
  return request(app)
    .get(`/travels/${travelId}/itineraries`)
    .set('Authorization', `Bearer ${token}`)
    .send();
};

export const getItinerary = (id, token) => {
  return request(app).get(`/itineraries/${id}`).set('Authorization', `Bearer ${token}`).send();
};

export const updateItinerary = (object, id, token) => {
  return request(app)
    .put(`/itineraries/${id}`)
    .set('Authorization', `Bearer ${token}`)
    .send(object);
};

export const deleteItinerary = (id, token) => {
  return request(app).delete(`/itineraries/${id}`).set('Authorization', `Bearer ${token}`);
};
