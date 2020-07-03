const request = require("supertest");
import { app } from "../../../src/index";

export const getAllTypes = (token) => {
  return request(app)
    .get("/symptomstypes")
    .set("Authorization", `Bearer ${token}`)
    .send();
};

export const getType = (token, id) => {
  return request(app)
    .get(`/symptomstypes/${id}`)
    .set("Authorization", `Bearer ${token}`)
    .send({ id });
};
