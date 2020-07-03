const request = require("supertest");
import { app } from "../../../src/index";

export const getAllSymptomGenerics = (token) => {
  return request(app)
    .get("/symptomsgenerics")
    .set("Authorization", `Bearer ${token}`)
    .send();
};

export const getSymptomGeneric = (token, id) => {
  return request(app)
    .get(`/symptomsgenerics/${id}`)
    .set("Authorization", `Bearer ${token}`)
    .send({ id });
};
