import { register } from 'module';
import { Model } from '../database';
import { Car, FuelEntry, Logbook, LogEntry } from 'types/models';

export const CarModel = new Model<Car>('Car', {
  id: { type: 'INTEGER', constraints: { null: false, primaryKey: true } },
  make: {
    type: 'TEXT',
    constraints: {
      null: true,
    },
  },
  model: {
    type: 'TEXT',
    constraints: {
      null: true,
    },
  },
  plate: {
    type: 'TEXT',
    constraints: {
      null: true,
    },
  },
  year: {
    type: 'INTEGER',
    constraints: {
      null: true,
    },
  },
  initialOdometer: {
    type: 'INTEGER',
    constraints: {
      null: true,
    },
  },
  odometer: {
    type: 'INTEGER',
    constraints: {
      null: true,
    },
  },
});

export const FuelEntryModel = new Model<FuelEntry>('Fuel_entry', {
  id: { type: 'INTEGER', constraints: { null: false, primaryKey: true } },
  carId: {
    type: 'INTEGER',
    constraints: { null: false },
    attributes: { foreignKey: { field: 'id', reference: 'Car' } },
  },
  date: { type: 'INTEGER', constraints: { null: false } },
  odometer: { type: 'INTEGER', constraints: { null: false } },
  litres: { type: 'REAL', constraints: { null: false } },
  cost: { type: 'REAL', constraints: { null: false } },
  type: { type: 'INTEGER', constraints: { null: false } },
  location: { type: 'TEXT', constraints: { null: false } },
  company: { type: 'TEXT', constraints: { null: false } },
});

export const LogbookModel = new Model<Logbook>('Logbook', {
  id: { type: 'INTEGER', constraints: { null: false, primaryKey: true } },
  carId: {
    type: 'INTEGER',
    constraints: { null: false },
    attributes: { foreignKey: { field: 'id', reference: 'Car' } },
  },
  start: { type: 'INTEGER', constraints: { null: false } },
  end: { type: 'INTEGER', constraints: { null: false } },
});

export const LogEntryModel = new Model<LogEntry>('Log_entry', {
  id: { type: 'INTEGER', constraints: { null: false, primaryKey: true } },
  logbookId: {
    type: 'INTEGER',
    constraints: { null: false },
    attributes: { foreignKey: { field: 'id', reference: 'logbook' } },
  },
  start: { type: 'INTEGER', constraints: { null: false } },
  end: { type: 'INTEGER', constraints: { null: false } },
  startOdometer: { type: 'INTEGER', constraints: { null: false } },
  endOdometer: { type: 'INTEGER', constraints: { null: false } },
  purpose: { type: 'TEXT', constraints: { null: false } },
});
