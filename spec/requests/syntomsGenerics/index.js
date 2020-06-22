const request = require("supertest");
import { app } from "../../../src/index";

export const getAllSyntomsGenerics = (token) => {
  return request(app).get("/syntomsgenerics").set("Authorization", `Bearer ${token}`).send();
};

export const getSyntomGeneric = (token, id) => {
  return request(app).get(`/syntomsgenerics/${id}`).set("Authorization", `Bearer ${token}`).send({ id });
};
