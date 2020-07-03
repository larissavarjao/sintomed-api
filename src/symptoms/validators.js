import { haveUserWithId } from "../utils/user";

export const isNewSymptomValid = (newSymptom) => {
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
