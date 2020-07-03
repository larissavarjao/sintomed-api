const request = require("supertest");
import { app } from "../../../src/index";

export const getAllSyntoms = (token) => {
  return request(app)
    .get("/syntoms")
    .set("Authorization", `Bearer ${token}`)
    .send();
};

export const getSyntom = (id, token) => {
  return request(app)
    .get(`/syntoms/${id}`)
    .set("Authorization", `Bearer ${token}`)
    .send({ id });
};

export const createSyntom = (newSyntom, token) => {
  return request(app)
    .post("/syntoms")
    .set("Authorization", `Bearer ${token}`)
    .send(newSyntom);
};

export const updateSyntom = (updateSyntom, token) => {
  return request(app)
    .put("/syntoms")
    .set("Authorization", `Bearer ${token}`)
    .send(updateSyntom);
};

export const deleteSyntom = (id, token) => {
  return request(app)
    .delete("/syntoms")
    .set("Authorization", `Bearer ${token}`)
    .send({ id });
};
