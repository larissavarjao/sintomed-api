const request = require("supertest");
import { app } from "../../../src/index";

export const getAllSyntomsGenerics = () => {
  return request(app).get("/syntoms-generics").send();
};

export const getSyntomGeneric = (id) => {
  return request(app).get("/syntoms-generics").send({ id });
};
