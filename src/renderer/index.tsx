import { createRoot } from 'react-dom/client';
import App from './App';
import { RequestObject, ResponseObject } from 'types';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(<App />);

// calling IPC exposed from preload script
window.electron.ipcRenderer.once('ipc-example', (arg) => {
  // eslint-disable-next-line no-console
  console.log('args:', arg);
});
window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);

/*
We will use asyncSql(sql) in src/renderer/pages/sqlDemoApp to send sql commmands and replies back and forth
between the main process and the renderer process.
*/
export const asyncRequest = async (
  req: RequestObject,
): Promise<ResponseObject> => {
  return await new Promise((resolve) => {
    window.electron.ipcRenderer.once('response', (arg) => {
      resolve(arg as ResponseObject);
    });
    window.electron.ipcRenderer.sendMessage('request', req);
  });
};
