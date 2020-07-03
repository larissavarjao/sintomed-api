import db from "../../data/db";

export const get = async (id) => {
  return db("symptoms").where({ id }).first();
};

export const getAll = async (userId) => {
  const genericsUnformatted = await getAllSymptomsGenerics(userId);
  const usersUnformatted = await getAllSymptomsUser(userId);
  const symptoms = [...genericsUnformatted, ...usersUnformatted].map(format);
  return symptoms;
};
export const getAllSymptomsGenerics = async (userId) => {
  return db("symptoms")
    .select(
      "symptoms.*",
      "symptoms_generics.id as symptom_generic_id",
      "symptoms_generics.name as name",
      "symptoms_generics.description as description",
      "symptoms_generics.classification as classification",
      "symptoms_types.id as type_id",
      "symptoms_types.name as type_name"
    )
    .from("symptoms")
    .rightJoin(
      "symptoms_generics",
      "symptoms.symptom_generic_id",
      "symptoms_generics.id"
    )
    .rightJoin(
      "symptoms_types",
      "symptoms_generics.type_id",
      "symptoms_types.id"
    )
    .where({
      "symptoms.user_id": userId,
      "symptoms.deleted_at": null,
      "symptoms_generics.deleted_at": null,
    });
};
export const getAllSymptomsUser = async (userId) => {
  return db("symptoms")
    .select(
      "symptoms.*",
      "symptoms_users.id as symptom_user_id",
      "symptoms_users.name as name",
      "symptoms_users.description as description",
      "symptoms_users.classification as classification",
      "symptoms_types.id as type_id",
      "symptoms_types.name as type_name"
    )
    .from("symptoms")
    .rightJoin(
      "symptoms_users",
      "symptoms.symptom_user_id",
      "symptoms_users.id"
    )
    .rightJoin("symptoms_types", "symptoms_users.type_id", "symptoms_types.id")
    .where({
      "symptoms.user_id": userId,
      "symptoms.deleted_at": null,
      "symptoms_users.deleted_at": null,
    });
};

export const insert = async (newSymptom) => {
  const newSymptomCreated = (
    await db("symptoms")
      .insert({
        ...newSymptom,
        created_at: new Date(),
        updated_at: new Date(),
      })
      .returning("*")
  )[0];

  return newSymptomCreated;
};

export const update = async (objToUpdate, id) => {
  const updatedSymptom = (
    await db("symptoms")
      .where({ id })
      .update({ ...objToUpdate, updated_at: new Date() })
      .returning("*")
  )[0];

  return updatedSymptom;
};

export const remove = async (id) => {
  return (
    await db("symptoms")
      .update({ deleted_at: new Date() })
      .where({ id })
      .returning("*")
  )[0];
};

export const format = (symptom) => {
  return {
    id: symptom.id,
    happenedAt: symptom.happened_at,
    durationSeconds: symptom.duration_seconds,
    observation: symptom.observation,
    userId: symptom.user_id,
    createdAt: symptom.created_at,
    updatedAt: symptom.updated_at,
    deletedAt: symptom.deleted_at,
    // generic or user
    symptomGenericId: !!symptom.symptom_generic_id
      ? symptom.symptom_generic_id
      : null,
    symptomUserId: !!symptom.symptom_user_id ? symptom.symptom_user_id : null,
    name: symptom.name,
    description: symptom.description,
    classification: symptom.classification,
    // type
    type_id: symptom.type_id,
    type_name: symptom.type_name,
  };
};
