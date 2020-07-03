import db from "../../data/db";

export const get = async (id) => {
  return db("symptoms_types").where({ id }).first();
};

export const getAll = async () => {
  return db("symptoms_types").select();
};

export const format = (symptomType) => {
  return {
    id: symptomType.id,
    name: symptomType.name,
    createdAt: symptomType.created_at,
    updatedAt: symptomType.updated_at,
    deletedAt: symptomType.deleted_at,
  };
};
