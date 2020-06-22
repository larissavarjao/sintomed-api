import db from "../../data/db";

export const get = async (id) => {
  return db("syntoms_generics").where({ id }).first();
};

export const getAll = async () => {
  return db("syntoms_generics").select();
};

export const format = (syntomGeneric) => {
  return {
    id: syntomGeneric.id,
    name: syntomGeneric.name,
    description: syntomGeneric.description,
    classification: syntomGeneric.classification,
    createdAt: syntomGeneric.created_at,
    updatedAt: syntomGeneric.updated_at,
    deletedAt: syntomGeneric.deleted_at,
  };
};
