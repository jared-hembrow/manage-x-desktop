import { Car } from 'main/database';
import { Action, ReducerAction, StateCTX } from '../StateManager';

export enum CarTypes {
  INSERT_CARS = 'INSERT_CARS',
}
export type CarState = { [carId: string]: Car };

export type CarAction = ReducerAction<CarTypes, any>;

export const isCarReducer = (action: Action): action is CarAction => {
  if (action.type in CarTypes) return true;
  return false;
};

export const carReducer = (state: StateCTX, action: Action) => {
  console.log('Modal reducer');
  switch (action.type) {
    case CarTypes.INSERT_CARS:
      const carList: CarState = { ...state.cars };

      if (Array.isArray(action.payload)) {
        for (let item of action.payload) {
          if (!item.id) continue;
          carList[item.id] = item;
        }
      } else {
        carList[action.payload.id] = action.payload;
      }
      return { ...state, cars: carList };
    default:
      return state;
  }
};
