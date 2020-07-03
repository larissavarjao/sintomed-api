import * as Symptom from "../../../src/symptoms/model";
import * as SymptomGeneric from "../../../src/symptomsGenerics/model";
import { setupDB } from "../../fixtures/db";
import { createSymptom, getAllSymptoms } from "../../requests/symptoms";
import { generateSymptom } from "../../generators/symptom";
import { getTimeDate } from "../../utils/date";

describe("Symptoms test", () => {
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

  test("should not have symptoms", async () => {
    const response = await getAllSymptoms(token);
    expect(response.status).toBe(200);

    const allSymptom = response.body;
    expect(allSymptom.length).toBe(0);
  });

  test("should not create symptom without token", async () => {
    const genericSymptom = await SymptomGeneric.getAll();
    const newSymptom = generateSymptom(user.id, genericSymptom[0].id, null);
    const response = await createSymptom(newSymptom, "");

    expect(response.status).toBe(401);
  });

  test("should not create symptom without token", async () => {
    const genericSymptom = await SymptomGeneric.getAll();
    const newSymptom = generateSymptom(user.id, genericSymptom[0].id, null);
    const response = await createSymptom(newSymptom, "");

    expect(response.status).toBe(401);
  });

  test("should not create symptom without happenedAt", async () => {
    const genericSymptom = await SymptomGeneric.getAll();
    const newSymptom = generateSymptom(user.id, genericSymptom[0].id, null);
    delete newSymptom.happenedAt;
    const response = await createSymptom(newSymptom, token);

    expect(response.status).toBe(400);
  });

  test("should not create symptom without userId", async () => {
    const genericSymptom = await SymptomGeneric.getAll();
    const newSymptom = generateSymptom(user.id, genericSymptom[0].id, null);
    delete newSymptom.userId;
    const response = await createSymptom(newSymptom, token);

    expect(response.status).toBe(400);
  });

  test("should not create symptom without symptomGenericId and symptomUserId", async () => {
    const newSymptom = generateSymptom(user.id, null, null);
    const response = await createSymptom(newSymptom, token);

    expect(response.status).toBe(400);
  });

  test("should create symptom with correct arguments - generic", async () => {
    const genericSymptom = await SymptomGeneric.getAll();
    const newSymptom = generateSymptom(user.id, genericSymptom[0].id, null);
    const response = await createSymptom(newSymptom, token);
    const responseSymptom = response.body;
    const symptom = await Symptom.get(responseSymptom.id);

    expect(response.status).toBe(201);
    expect(symptom).not.toBeUndefined();
    expect(responseSymptom.id).toBe(symptom.id);
    expect(getTimeDate(responseSymptom.happenedAt)).toBe(
      getTimeDate(symptom.happened_at)
    );
    expect(responseSymptom.durationSeconds).toBe(symptom.duration_seconds);
    expect(responseSymptom.observation).toBe(symptom.observation);
    expect(responseSymptom.userId).toBe(symptom.user_id);
    expect(responseSymptom.symptomGenericId).toBe(symptom.symptom_generic_id);
    expect(responseSymptom.symptomUserId).toBeNull();
    expect(responseSymptom.name).toBe(genericSymptom.name);
    expect(responseSymptom.description).toBe(genericSymptom.description);
    expect(responseSymptom.classification).toBe(symptom.classification);
    expect(responseSymptom.createdAt).not.toBeNull();
    expect(responseSymptom.updatedAt).not.toBeNull();
  });

  test("should get one symptoms", async () => {
    const response = await getAllSymptoms(token);
    expect(response.status).toBe(200);

    const allSymptoms = response.body;
    expect(allSymptoms.length).toBe(1);
  });

  // test("should get one specific type", async () => {
  //   const allTypes = await SyntomsTypes.getAll();
  //   const firstType = allTypes[0];
  //   const response = await getType(token, firstType.id);
  //   expect(response.status).toBe(200);

  //   const type = response.body;
  //   expect(type.id).toBe(firstType.id);
  //   expect(type.name).toBe(firstType.name);
  // });
});
