import { Model } from 'main/database';

export * from './car.d';
export type ModelsList = { [tableName: string]: Model<unknown> };
