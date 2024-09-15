import { ipcRenderer } from 'electron';
import { createContext, ReactNode, useEffect, useReducer } from 'react';
import { asyncRequest } from '../../renderer';
import { RequestObject, ResponseObject } from 'types';
import {
  isModalReducer,
  modalReducer,
  ModalState,
  ModalTypes,
} from './reducers/modalReducer';
import {
  carReducer,
  CarState,
  CarTypes,
  isCarReducer,
} from './reducers/carsReducer';

export type StateCTX = {
  // MODALS
  modal: ModalState;
  cars: CarState;
};
export type StateManagerCTX = {
  makeRequest: (req: RequestObject) => Promise<ResponseObject>;
  state: StateCTX;
  dispatch: (action: Action) => void;
};

export type ReducerAction<T, P> = { type: T; payload?: P };

export type ActionTypes = ModalTypes | CarTypes | 'INIT';
export type Action = ReducerAction<ActionTypes, any>;

const initialState: StateCTX = {
  modal: { type: ModalTypes.EMPTY_MODAL, data: null },
  cars: {},
};
const StateManager = createContext<StateManagerCTX>({
  state: initialState,
  makeRequest: function (req: RequestObject): Promise<ResponseObject> {
    throw new Error('Function not implemented.');
  },
  dispatch: function (action: Action): void {
    throw new Error('Function not implemented.');
  },
});

export const StateManagerProvider = ({ children }: { children: ReactNode }) => {
  const reducer = (state: StateCTX, action: Action) => {
    console.log('State Manager Action', action);
    if (isModalReducer(action)) return modalReducer(state, action);
    if (isCarReducer(action)) return carReducer(state, action);
    return state;
  };

  const makeRequest = async (req: RequestObject): Promise<ResponseObject> => {
    const result = await asyncRequest(req);
    console.log('Result: - ', result);
    return result;
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateManager.Provider
      value={{ makeRequest: makeRequest, state, dispatch }}
    >
      {children}
    </StateManager.Provider>
  );
};

export default StateManager;
