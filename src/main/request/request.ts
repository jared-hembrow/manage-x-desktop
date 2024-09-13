import { RequestObject, ResponseObject } from 'types';
import { getCars, getlogbook } from './routes';
import { Database } from 'sqlite3';
import { ModelsList } from 'types/models';

export const request = async (
  req: RequestObject,
  db: Database,
  models: ModelsList,
): Promise<ResponseObject> => {
  switch (req.type) {
    case 'GET-cars':
      return await getCars(db, models);

    default:
      return {
        status: 400,
        data: {
          error: 'unknown request',
        },
      };
  }
};
