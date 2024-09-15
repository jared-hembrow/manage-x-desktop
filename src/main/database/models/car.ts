// import { register } from 'module';
// import { Model } from '..';
// import { FuelEntry, Logbook, LogEntry } from 'types/models';

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';

@Entity('Car')
export class Car {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  make: string;

  @Column('text')
  model: string;

  @Column('text')
  plate: string;

  @Column('integer')
  year: number;

  @Column('integer')
  initialOdometer: number;
  @Column('integer')
  odometer: number;

  @OneToMany(() => Logbook, (logbook) => logbook.car)
  logbooks: Logbook[];

  @OneToMany(() => FuelEntry, (entry) => entry.car)
  fuelEntries: FuelEntry[];
}
@Entity('Fuel_entry')
export class FuelEntry {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => Car, (car) => car.logbooks)
  car: Car;
  @Column('integer')
  model: number;
  @Column('integer')
  date: string;
  @Column('double')
  litres: number;
  @Column('double')
  cost: number;
  @Column('text')
  type: string;
  @Column('text')
  location: string;
  @Column('text')
  company: string;
}
@Entity('Logbook')
export class Logbook {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Car, (car) => car.logbooks)
  car: Car;

  @Column('integer')
  start: string;
  @Column('integer')
  end: number;

  @OneToMany(() => LogbookEntry, (entry) => entry.logbook)
  entries: LogbookEntry[];
}
@Entity('Logbook_entry')
export class LogbookEntry {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Logbook, (logbook) => logbook.entries)
  logbook: Logbook;

  @Column('integer')
  start: string;
  @Column('integer')
  end: number;
}

// export const CarModel = new Model<Car>('Car', {
//   id: { type: 'INTEGER', constraints: { null: false, primaryKey: true } },
//   make: {
//     type: 'TEXT',
//     constraints: {
//       null: true,
//     },
//   },
//   model: {
//     type: 'TEXT',
//     constraints: {
//       null: true,
//     },
//   },
//   plate: {
//     type: 'TEXT',
//     constraints: {
//       null: true,
//     },
//   },
//   year: {
//     type: 'INTEGER',
//     constraints: {
//       null: true,
//     },
//   },
//   initialOdometer: {
//     type: 'INTEGER',
//     constraints: {
//       null: true,
//     },
//   },
//   odometer: {
//     type: 'INTEGER',
//     constraints: {
//       null: true,
//     },
//   },
// });

// export const FuelEntryModel = new Model<FuelEntry>('Fuel_entry', {
//   id: { type: 'INTEGER', constraints: { null: false, primaryKey: true } },
//   carId: {
//     type: 'INTEGER',
//     constraints: { null: false },
//     attributes: { foreignKey: { field: 'id', reference: 'Car' } },
//   },
//   date: { type: 'INTEGER', constraints: { null: false } },
//   odometer: { type: 'INTEGER', constraints: { null: false } },
//   litres: { type: 'REAL', constraints: { null: false } },
//   cost: { type: 'REAL', constraints: { null: false } },
//   type: { type: 'INTEGER', constraints: { null: false } },
//   location: { type: 'TEXT', constraints: { null: false } },
//   company: { type: 'TEXT', constraints: { null: false } },
// });

// export const LogbookModel = new Model<Logbook>('Logbook', {
//   id: { type: 'INTEGER', constraints: { null: false, primaryKey: true } },
//   carId: {
//     type: 'INTEGER',
//     constraints: { null: false },
//     attributes: { foreignKey: { field: 'id', reference: 'Car' } },
//   },
//   start: { type: 'INTEGER', constraints: { null: false } },
//   end: { type: 'INTEGER', constraints: { null: false } },
// });

// export const LogEntryModel = new Model<LogEntry>('Log_entry', {
//   id: { type: 'INTEGER', constraints: { null: false, primaryKey: true } },
//   logbookId: {
//     type: 'INTEGER',
//     constraints: { null: false },
//     attributes: { foreignKey: { field: 'id', reference: 'logbook' } },
//   },
//   start: { type: 'INTEGER', constraints: { null: false } },
//   end: { type: 'INTEGER', constraints: { null: false } },
//   startOdometer: { type: 'INTEGER', constraints: { null: false } },
//   endOdometer: { type: 'INTEGER', constraints: { null: false } },
//   purpose: { type: 'TEXT', constraints: { null: false } },
// });
