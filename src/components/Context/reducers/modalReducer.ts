import { Action, ReducerAction, StateCTX } from '../StateManager';

export enum ModalTypes {
  EMPTY_MODAL = 'EMPTY_MODAL',
  CREATE_CAR = 'CREATE_CAR',
  CLOSE_MODAL = 'CLOSE_MODAL',
}
export type ModalState = {
  type: ModalTypes;
  data: any;
};

export type ModalAction = ReducerAction<ModalTypes, any>;

export const isModalReducer = (action: Action): action is ModalAction => {
  if (action.type in ModalTypes) return true;
  return false;
};

export const modalReducer = (state: StateCTX, action: Action) => {
  console.log('Modal reducer');
  switch (action.type) {
    case ModalTypes.CLOSE_MODAL:
      return { ...state, modal: { type: ModalTypes.EMPTY_MODAL, data: null } };
    case ModalTypes.CREATE_CAR:
      return { ...state, modal: { type: ModalTypes.CREATE_CAR, data: {} } };

    default:
      return state;
  }
};
