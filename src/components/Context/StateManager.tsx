import { ipcRenderer } from 'electron';
import { createContext, ReactNode, useEffect } from 'react';

const StateManager = createContext({ get: () => 'wrong' });

export const StateManagerProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    // const data = ipcRenderer.send('request');
    // console.log(data);
  });
  const get = (): 'wrong' => {
    // const data = ipcRenderer.invoke('request').then((t) => t);
    // console.log(data);
    return 'wrong';
  };
  return (
    <StateManager.Provider value={{ get: get }}>
      {children}
    </StateManager.Provider>
  );
};

export default StateManager;
