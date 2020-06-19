import * as SyntomsTypes from "../../src/syntomsTypes/model";
import { setupDB } from "../fixtures/db";
import { generateUser } from "../generators/user";
import { createUser, loginUser } from "../requests/user";
import { getType, getAllTypes } from "../requests/syntomsType";
import { types } from "../../data/utils/types";

describe("Syntoms Types test", () => {
  let userGenerated;
  let user;
  let userToken;

  beforeAll(async () => {
    await setupDB();
  });

  beforeEach(async () => {
    userGenerated = generateUser();
    await createUser(userGenerated);
    const userBody = (await loginUser(userGenerated.email, userGenerated.password)).body;
    user = userBody.user;
    userToken = userBody.token;
  });

  test("User should get all types", async () => {
    const response = await getAllTypes(userToken);
    expect(response.status).toBe(200);

    const allTypes = response.body;
    const dbTypesNames = allTypes.map((type) => type.name);
    const allTypesNames = types.map((type) => type.name);
    expect(dbTypesNames).toMatchObject(allTypesNames);
  });

  test("User should get one specific type", async () => {
    const allTypes = await SyntomsTypes.getAll();
    const firstType = allTypes[0];
    const response = await getType(userToken, firstType.id);
    expect(response.status).toBe(200);

    const type = response.body;
    expect(type.id).toBe(firstType.id);
    expect(type.name).toBe(firstType.name);
  });
});
