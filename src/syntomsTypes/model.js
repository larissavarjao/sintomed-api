import db from "../../data/db";

export const get = async (id) => {
  return db("syntoms_types").where({ id }).first();
};

export const getAll = async () => {
  return db("syntoms_types").select();
};

export const format = (syntomType) => {
  return {
    id: syntomType.id,
    name: syntomType.name,
    createdAt: syntomType.created_at,
    updatedAt: syntomType.updated_at,
    deletedAt: syntomType.deleted_at,
  };
};
