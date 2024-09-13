export type Car = {
  id?: number;
  make: string;
  model: string;
  plate: string;
  year: number;
  initialOdometer: number;
  odometer: number;
};
export type Logbook = {
  id?: number;
  cardId: number;
  start: number;
  end: number;
};
export type FuelEntry = {
  id?: number;
  cardId: number;
  date: number;
  odometer: number;
  litres: number;
  cost: number;
  type: string;
  company: string;
};
export type LogEntry = {
  id?: number;
  logbookId: number;
  start: number;
  end: number;
  startOdometer: number;
  endOdometer: number;
  purpose: number;
};
