import { Database } from 'sqlite3';
import { ResponseObject } from 'types';
import { ModelsList } from 'types/models';

export const getCars = async (
  db: Database,
  models: ModelsList,
): Promise<ResponseObject> => {
  const data = await models.car.read(db);
  return {
    status: !data ? 400 : 200,
    data: !data ? {} : data,
  };
};
