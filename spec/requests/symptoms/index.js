const request = require("supertest");
import { app } from "../../../src/index";

export const getAllSymptoms = (token) => {
  return request(app)
    .get("/symptoms")
    .set("Authorization", `Bearer ${token}`)
    .send();
};

export const getSymptom = (id, token) => {
  return request(app)
    .get(`/symptoms/${id}`)
    .set("Authorization", `Bearer ${token}`)
    .send({ id });
};

export const createSymptom = (newSymptom, token) => {
  return request(app)
    .post("/symptoms")
    .set("Authorization", `Bearer ${token}`)
    .send(newSymptom);
};

export const updateSymptom = (updateSymptom, token) => {
  return request(app)
    .put("/symptoms")
    .set("Authorization", `Bearer ${token}`)
    .send(updateSymptom);
};

export const deleteSymptom = (id, token) => {
  return request(app)
    .delete("/symptoms")
    .set("Authorization", `Bearer ${token}`)
    .send({ id });
};
