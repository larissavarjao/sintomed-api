import db from "../../data/db";

export const get = async (id) => {
  return db("symptoms_generics").where({ id }).first();
};

export const getAll = async () => {
  return db("symptoms_generics").select();
};

export const format = (symptomGeneric) => {
  return {
    id: symptomGeneric.id,
    name: symptomGeneric.name,
    description: symptomGeneric.description,
    classification: symptomGeneric.classification,
    createdAt: symptomGeneric.created_at,
    updatedAt: symptomGeneric.updated_at,
    deletedAt: symptomGeneric.deleted_at,
  };
};
