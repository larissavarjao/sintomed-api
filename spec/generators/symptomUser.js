import * as faker from "faker";

export const generateSymptom = (userId, symptomGenericId, symptomUserId) => {
  return {
    happenedAt: new Date(),
    durationSeconds: 60 * 15,
    observation: faker.random.words(),
    userId,
    symptomGenericId,
    symptomUserId,
  };
};
