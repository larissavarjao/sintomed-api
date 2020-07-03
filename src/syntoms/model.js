import db from "../../data/db";

export const get = async (id) => {
  return db("syntoms").where({ id }).first();
};

export const getAll = async (userId) => {
  const genericsUnformatted = await getAllSyntomsGenerics(userId);
  const usersUnformatted = await getAllSyntomsUser(userId);
  const syntoms = [...genericsUnformatted, ...usersUnformatted].map(format);
  return syntoms;
};
export const getAllSyntomsGenerics = async (userId) => {
  return db("syntoms")
    .select(
      "syntoms.*",
      "syntoms_generics.id as syntom_generic_id",
      "syntoms_generics.name as name",
      "syntoms_generics.description as description",
      "syntoms_generics.classification as classification",
      "syntoms_types.id as type_id",
      "syntoms_types.name as type_name"
    )
    .from("syntoms")
    .rightJoin(
      "syntoms_generics",
      "syntoms.syntom_generic_id",
      "syntoms_generics.id"
    )
    .rightJoin("syntoms_types", "syntoms_generics.type_id", "syntoms_types.id")
    .where({
      "syntoms.user_id": userId,
      "syntoms.deleted_at": null,
      "syntoms_generics.deleted_at": null,
    });
};
export const getAllSyntomsUser = async (userId) => {
  return db("syntoms")
    .select(
      "syntoms.*",
      "syntoms_users.id as syntom_user_id",
      "syntoms_users.name as name",
      "syntoms_users.description as description",
      "syntoms_users.classification as classification",
      "syntoms_types.id as type_id",
      "syntoms_types.name as type_name"
    )
    .from("syntoms")
    .rightJoin("syntoms_users", "syntoms.syntom_users_id", "syntoms_users.id")
    .rightJoin("syntoms_types", "syntoms_users.type_id", "syntoms_types.id")
    .where({
      "syntoms.user_id": userId,
      "syntoms.deleted_at": null,
      "syntoms_users.deleted_at": null,
    });
};

export const insert = async (
  happenedAt,
  duration,
  observation,
  userId,
  syntomGenericId,
  syntomUserId
) => {
  const newSyntomCreated = (
    await db("syntoms")
      .insert({
        happened_at: happenedAt,
        duration_seconds: duration,
        observation,
        user_id: userId,
        syntom_generic_id: syntomGenericId,
        syntom_users_id: syntomUserId,
        created_at: new Date(),
        updated_at: new Date(),
      })
      .returning("*")
  )[0];

  return newSyntomCreated;
};

export const update = async (objToUpdate, id) => {
  return db("syntoms")
    .update({ ...objToUpdate, updated_at: new Date() })
    .where({ id });
};

export const remove = async (id) => {
  return db("syntoms").update({ deleted_at: new Date() }).where({ id });
};

export const format = (syntom) => {
  return {
    id: syntom.id,
    happenedAt: syntom.happened_at,
    durationSeconds: syntom.duration_seconds,
    observation: syntom.observation,
    userId: syntom.user_id,
    createdAt: syntom.created_at,
    updatedAt: syntom.updated_at,
    // generic or user
    syntomGenericId: !!syntom.syntom_generic_id
      ? syntom.syntom_generic_id
      : null,
    syntomUserId: !!syntom.syntom_user_id ? syntom.syntom_user_id : null,
    name: syntom.name,
    description: syntom.description,
    classification: syntom.classification,
    // type
    type_id: syntom.type_id,
    type_name: syntom.type_name,
  };
};
