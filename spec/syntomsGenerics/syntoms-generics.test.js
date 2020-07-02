import * as SyntomsGenerics from "../../src/syntomsGenerics/model";
import { setupDB } from "../fixtures/db";
import { generateUser } from "../generators/user";
import { createUser, loginUser } from "../requests/user";
import {
  getSyntomGeneric,
  getAllSyntomsGenerics,
} from "../requests/syntomsGenerics";
import { genericSyntoms } from "../../data/utils/syntoms_generics";

describe("Syntoms Generics Test", () => {
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

  test("User should get all generics", async () => {
    const response = await getAllSyntomsGenerics(token);
    expect(response.status).toBe(200);

    const allSyntomsGenerics = response.body;
    const dbGenericsNames = allSyntomsGenerics.map((type) => type.name);
    const allGenericsNames = genericSyntoms.map((type) => type.name);
    const dbGenericsDescriptions = allSyntomsGenerics.map(
      (type) => type.description
    );
    const allGenericsDescriptions = genericSyntoms.map(
      (type) => type.description
    );
    const dbGenericsClassifications = allSyntomsGenerics.map(
      (type) => type.classification
    );
    const allGenericsClassifications = genericSyntoms.map(
      (type) => type.classification
    );
    expect(dbGenericsNames).toMatchObject(allGenericsNames);
    expect(dbGenericsDescriptions).toMatchObject(allGenericsDescriptions);
    expect(dbGenericsClassifications).toMatchObject(allGenericsClassifications);
  });

  test("User should get one specific generic", async () => {
    const allGenericSyntoms = await SyntomsGenerics.getAll();
    const firstGeneric = allGenericSyntoms[0];
    const response = await getSyntomGeneric(token, firstGeneric.id);
    expect(response.status).toBe(200);

    const generic = response.body;
    expect(generic.id).toBe(firstGeneric.id);
    expect(generic.name).toBe(firstGeneric.name);
    expect(generic.description).toBe(firstGeneric.description);
    expect(generic.classification).toBe(firstGeneric.classification);
  });
});
