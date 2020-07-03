import * as Syntom from "../../../src/syntoms/model";
import * as SyntomGeneric from "../../../src/syntomsGenerics/model";
import { setupDB } from "../../fixtures/db";
import {
  createSyntom,
  deleteSyntom,
  getAllSyntoms,
  getSyntom,
  updateSyntom,
} from "../../requests/syntoms";
import { generateSyntom } from "../../generators/syntom";
import { getTimeDate } from "../../utils/date";

describe("Syntoms test", () => {
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

  test("should not have syntoms", async () => {
    const response = await getAllSyntoms(token);
    expect(response.status).toBe(200);

    const allSyntoms = response.body;
    expect(allSyntoms.length).toBe(0);
  });

  test("should not create symptom without token", async () => {
    const genericSyntom = await SyntomGeneric.getAll();
    const newSymptom = generateSyntom(user.id, genericSyntom[0].id, null);
    const response = await createSyntom(newSymptom, "");

    expect(response.status).toBe(401);
  });

  test("should not create symptom without token", async () => {
    const genericSyntom = await SyntomGeneric.getAll();
    const newSymptom = generateSyntom(user.id, genericSyntom[0].id, null);
    const response = await createSyntom(newSymptom, "");

    expect(response.status).toBe(401);
  });

  test("should not create symptom without happenedAt", async () => {
    const genericSyntom = await SyntomGeneric.getAll();
    const newSymptom = generateSyntom(user.id, genericSyntom[0].id, null);
    delete newSymptom.happenedAt;
    const response = await createSyntom(newSymptom, token);

    expect(response.status).toBe(400);
  });

  test("should not create symptom without userId", async () => {
    const genericSyntom = await SyntomGeneric.getAll();
    const newSymptom = generateSyntom(user.id, genericSyntom[0].id, null);
    delete newSymptom.userId;
    const response = await createSyntom(newSymptom, token);

    expect(response.status).toBe(400);
  });

  test("should not create symptom without syntomGenericId and syntomUserId", async () => {
    const newSymptom = generateSyntom(user.id, null, null);
    const response = await createSyntom(newSymptom, token);

    expect(response.status).toBe(400);
  });

  test("should create symptom with correct arguments - generic", async () => {
    const genericSyntom = await SyntomGeneric.getAll();
    const newSymptom = generateSyntom(user.id, genericSyntom[0].id, null);
    const response = await createSyntom(newSymptom, token);
    const responseSymptom = response.body;
    const symptom = await Syntom.get(responseSymptom.id);

    expect(response.status).toBe(201);
    expect(symptom).not.toBeUndefined();
    expect(responseSymptom.id).toBe(symptom.id);
    expect(getTimeDate(responseSymptom.happenedAt)).toBe(
      getTimeDate(symptom.happened_at)
    );
    expect(responseSymptom.durationSeconds).toBe(symptom.duration_seconds);
    expect(responseSymptom.observation).toBe(symptom.observation);
    expect(responseSymptom.userId).toBe(symptom.user_id);
    expect(responseSymptom.syntomGenericId).toBe(symptom.syntom_generic_id);
    expect(responseSymptom.syntomUserId).toBeNull();
    expect(responseSymptom.name).toBe(genericSyntom.name);
    expect(responseSymptom.description).toBe(genericSyntom.description);
    expect(responseSymptom.classification).toBe(symptom.classification);
    expect(responseSymptom.createdAt).not.toBeNull();
    expect(responseSymptom.updatedAt).not.toBeNull();
  });

  test("should get one syntoms", async () => {
    const response = await getAllSyntoms(token);
    expect(response.status).toBe(200);

    const allSyntoms = response.body;
    expect(allSyntoms.length).toBe(1);
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
