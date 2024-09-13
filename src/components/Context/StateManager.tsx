import { ipcRenderer } from 'electron';
import { createContext, ReactNode, useEffect, useReducer } from 'react';
import { asyncRequest } from '../../renderer';
import { RequestObject, ResponseObject } from 'types';

export type StateCTX = {
  // MODALS
  modalType: string;
  modalData: any;
};
export type StateManagerCTX = {
  makeRequest: (req: RequestObject) => Promise<ResponseObject>;
  state: StateCTX;
  dispatch: (action: Action) => void;
};

export type ReducerAction<T, P> = { type: T; payload?: P };

export type ActionTypes = 'INIT';
export type Action = ReducerAction<ActionTypes, any>;

const initialState: StateCTX = {
  modalType: '',
  modalData: null,
};
const StateManager = createContext<StateManagerCTX | null>(null);

export const StateManagerProvider = ({ children }: { children: ReactNode }) => {
  const reducer = (state: StateCTX, action: Action) => {
    switch (action.type) {
      default:
        return state;
    }
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
