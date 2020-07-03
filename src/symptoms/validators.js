import { haveUserWithId } from "../utils/user";

export const isSymptomValid = (newSymptom) => {
  if (!newSymptom.happenedAt) {
    return false;
  }

  if (!newSymptom.userId || !haveUserWithId(newSymptom.userId)) {
    return false;
  }

  if (!newSymptom.symptomGenericId && !newSymptom.symptomUserId) {
    return false;
  }

  return true;
};

export const isSymptomValidToUpdate = (symptom) => {
  if (symptom.happenedAt && symptom.happenedAt === null) {
    return false;
  }

  if (symptom.symptomGenericId === null && symptom.symptomUserId === null) {
    return false;
  }

  return true;
};
