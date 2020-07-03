import * as SymptomsTypes from "../../../src/symptomsTypes/model";
import { setupDB } from "../../fixtures/db";
import { getType, getAllTypes } from "../../requests/symptomsType";
import { types } from "../../../data/utils/types";

describe("Symptoms Types test", () => {
  let userBody;
  let user;
  let token;

  beforeAll(async () => {
    userBody = await setupDB();
  });

  beforeEach(async () => {
    user = userBody.user;
    token = userBody.token;
  });

  test("User should get all types", async () => {
    const response = await getAllTypes(token);
    expect(response.status).toBe(200);

    const allTypes = response.body;
    const dbTypesNames = allTypes.map((type) => type.name);
    const allTypesNames = types.map((type) => type.name);
    expect(dbTypesNames).toMatchObject(allTypesNames);
  });

  test("User should get one specific type", async () => {
    const allTypes = await SymptomsTypes.getAll();
    const firstType = allTypes[0];
    const response = await getType(token, firstType.id);
    expect(response.status).toBe(200);

    const type = response.body;
    expect(type.id).toBe(firstType.id);
    expect(type.name).toBe(firstType.name);
  });
});
