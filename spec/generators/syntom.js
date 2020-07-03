import * as faker from "faker";

export const generateSyntom = (userId, syntomGenericId, syntomUserId) => {
  return {
    happenedAt: new Date(),
    durationSeconds: 60 * 15,
    observation: faker.random.words(),
    userId,
    syntomGenericId,
    syntomUserId,
  };
};
