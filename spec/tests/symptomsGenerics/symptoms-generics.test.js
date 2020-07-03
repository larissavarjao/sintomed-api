import * as SymptomsGenerics from "../../../src/symptomsGenerics/model";
import { setupDB } from "../../fixtures/db";
import {
  getSymptomGeneric,
  getAllSymptomGenerics,
} from "../../requests/symptomsGenerics";
import { genericSymptoms } from "../../../data/utils/symptoms_generics";

describe("Symptoms Generics Test", () => {
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
    const response = await getAllSymptomGenerics(token);
    expect(response.status).toBe(200);

    const allSymptomsGenerics = response.body;
    const dbGenericsNames = allSymptomsGenerics.map((type) => type.name);
    const allGenericsNames = genericSymptoms.map((type) => type.name);
    const dbGenericsDescriptions = allSymptomsGenerics.map(
      (type) => type.description
    );
    const allGenericsDescriptions = genericSymptoms.map(
      (type) => type.description
    );
    const dbGenericsClassifications = allSymptomsGenerics.map(
      (type) => type.classification
    );
    const allGenericsClassifications = genericSymptoms.map(
      (type) => type.classification
    );
    expect(dbGenericsNames).toMatchObject(allGenericsNames);
    expect(dbGenericsDescriptions).toMatchObject(allGenericsDescriptions);
    expect(dbGenericsClassifications).toMatchObject(allGenericsClassifications);
  });

  test("User should get one specific generic", async () => {
    const allGenericSymptoms = await SymptomsGenerics.getAll();
    const firstGeneric = allGenericSymptoms[0];
    const response = await getSymptomGeneric(token, firstGeneric.id);
    expect(response.status).toBe(200);

    const generic = response.body;
    expect(generic.id).toBe(firstGeneric.id);
    expect(generic.name).toBe(firstGeneric.name);
    expect(generic.description).toBe(firstGeneric.description);
    expect(generic.classification).toBe(firstGeneric.classification);
  });
});
