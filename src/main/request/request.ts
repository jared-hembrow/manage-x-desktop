import { RequestObject, ResponseObject } from 'types';
import { createCar, getCars, getlogbook } from './routes';
import { Database } from 'sqlite3';
import { ModelsList } from 'types/models';

export const request = async (req: RequestObject): Promise<ResponseObject> => {
  switch (req.type) {
    case 'GET-cars':
      return await getCars();
    case 'POST-car':
      if (!req.body)
        return { status: 400, data: { error: 'body of request not found' } };
      return await createCar(req.body);

    default:
      return {
        status: 400,
        data: {
          error: 'unknown request',
        },
      };
  }
};
