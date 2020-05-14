import * as faker from 'faker';

export const generateTravelBasic = () => {
  return {
    title: faker.name.title(),
  };
};

export const generateTravelComplete = () => {
  return {
    title: faker.name.title(),
    startDate: new Date(),
    endDate: new Date(),
  };
};
