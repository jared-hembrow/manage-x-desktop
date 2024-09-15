import { Car, Logbook, FuelEntry, LogbookEntry } from './models';
import { DataSource } from 'typeorm';

export const db = new DataSource({
  type: 'sqlite',
  database: 'db.sqlite3',
  synchronize: true,
  entities: [Car, Logbook, FuelEntry, LogbookEntry],
  logging: true,
});
