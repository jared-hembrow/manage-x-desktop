import { Car, db } from '../../database';
import { ResponseObject } from 'types';

export const createCar = async (values: {
  [field: string]: any;
}): Promise<ResponseObject> => {
  console.log('Create car');
  const newCar = new Car();
  newCar.make = values.make;
  newCar.model = values.model;
  newCar.year = values.year;
  newCar.plate = values.plate;
  newCar.odometer = values.odometer;
  newCar.initialOdometer = values.initialOdometer;

  const res = await db.manager.save(newCar);
  // const res = await models.car.insert(db, values);
  console.log(res);
  return {
    status: !res ? 400 : 200,
    data: { result: res },
  };
};
export const getCars = async (): Promise<ResponseObject> => {
  const data = await db.manager.find(Car);
  return {
    status: !data ? 400 : 200,
    data: !data ? {} : data,
  };
};
