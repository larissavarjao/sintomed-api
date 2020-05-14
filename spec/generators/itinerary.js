import * as faker from 'faker';

export const generateItinerary = (travelId) => {
  return {
    title: faker.name.title(),
    startDate: new Date(),
    endDate: new Date(),
    startCityName: 'Chicago',
    startCityPlaceId: '1',
    startCityLat: 10,
    startCityLong: 20,
    endCityName: 'Orlando',
    endCityPlaceId: '2',
    endCityLat: 30,
    endCityLong: 40,
    costByDay: 90,
    cityCurrency: 'USD',
    travelId,
  };
};
