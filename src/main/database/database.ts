import { Database } from 'sqlite3';

type Field = {
  type: 'INTEGER' | 'TEXT' | 'REAL' | 'BLOB' | 'NULL';
  constraints: {
    null?: boolean;
    primaryKey?: boolean;
    unique?: boolean;
    default?: any;
  };
  attributes?: {
    foreignKey?: {
      field: string;
      reference: string;
    };
  };
};

export class Model<T> {
  tableName: string;
  fields: { [fieldName: string]: Field };

  constructor(tableName: string, fields: { [columnName: string]: Field }) {
    this.fields = fields;
    this.tableName = tableName;
  }
  buildCreateTableQuerry() {
    // create Querry
    const keys = Object.keys(this.fields);
    const sql = `CREATE TABLE ${this.tableName} (${keys.map((f, i) => {
      const field = this.fields[f];
      let row = f + ' ' + field.type + ' ';
      if (!field.constraints.null) row = row + 'NOT NULL ';
      if (field.constraints.primaryKey) row = row + 'PRIMARY KEY ';
      if (field.constraints.unique) row = row + 'UNIQUE ';
      if (field.constraints.default) {
        if (typeof field.constraints.default == 'string')
          row = row + "'" + field.constraints.default + "' ";
        else row = row + field.constraints.default + ' ';
      }
      if (field.attributes) {
        if (field.attributes.foreignKey)
          row +
            'REFERENCES ' +
            field.attributes.foreignKey.reference +
            '(' +
            field.attributes.foreignKey.field +
            ')';
      }
      return row + (i === keys.length - 1 ? '' : '\n');
    })});`;
    return sql;
  }
  async tableExists(db: Database): Promise<boolean> {
    // Check if table exisits inside of Database
    try {
      const result = await new Promise((resolve, reject) => {
        db.prepare(
          `SELECT * FROM sqlite_master WHERE type="table" AND name="${this.tableName}"`,
        ).get((err, row) => {
          if (err) {
            return reject(false);
          }
          return resolve(row);
        });
      });
      if (result) return true;
      return false;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
  async create(db: Database): Promise<boolean> {
    try {
      // Check if Table already exists
      const existingTable = await this.tableExists(db);
      console.log('exists: ', this.tableName, existingTable);
      if (existingTable) return true;

      const result: boolean = await new Promise((resolve, reject) => {
        // Build Raw SQL
        const sql = this.buildCreateTableQuerry();

        // Run querry
        db.serialize(() => {
          db.run(sql, (err) => {
            console.log(err);
            return reject(false);
          });
        });
        return resolve(true);
      });
      return result;
    } catch (err) {
      console.log('Error:', err);
      return false;
    }
  }

  insert(db: Database, v: { [key: string]: any }): boolean {
    // Build Querry
    const keys = Object.keys(this.fields);
    const vKeys = Object.keys(v);
    const sql = `INSERT INTO ${this.tableName} (${keys}) VALUES (${vKeys.map(
      (f) => {
        return v[f];
      },
    )});`;

    // Run Querry
    db.serialize(() => {
      db.run(sql, (err) => {
        console.log(err);
        return false;
      });
    });
    return true;
  }

  async read(db: Database, v?: { [field: string]: any }): Promise<T[] | null> {
    // const keys = Object.keys(this.fields);
    const vKeys = Object.keys(v ? v : []);
    const sql = `SELECT * FROM ${this.tableName} ${
      vKeys.length > 0 ? 'WHERE' : ''
    } ${
      vKeys.length < 1
        ? ''
        : vKeys.map((f) => {
            if (!v) return;
            return f + '=' + v[f];
          })
    };`;
    console.log('read sql: ', sql);
    let cars = null;
    try {
      const rows: T[] = await new Promise((resolve, reject) => {
        db.all<T>(sql, (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        });
      });
      console.log('querried:', rows.length);
      return rows;
    } catch (err) {
      console.error('error:', err);
      return null;
    }
  }

  async delete(db: Database, id: number | string): Promise<boolean> {
    try {
      const sql = `DELETE FROM ${this.tableName} WHERE id = ${id}`;
      const result: boolean = await new Promise((resolve, reject) => {
        db.run(sql, (e) => {
          if (e) {
            console.log(e);
            reject(false);
          } else return resolve(true);
        });
      });
      return result;
    } catch (err) {
      console.log(err);
      return false;
    }
  }
  async update(
    db: Database,
    id: number | string,
    v: { [field: string]: any },
  ): Promise<T | null> {
    try {
      // Build Querry
      const keys = Object.keys(v);
      const sql = `UPDARE ${this.tableName} SET ${keys.map(
        (k) => k + ' = ' + v[k],
      )} WHERE id = ${id}`;

      // Run Querry
      const result: boolean = await new Promise((resolve, reject) => {
        db.run(sql, (err) => {
          if (err) {
            console.log(err);
            return reject(false);
          } else {
            return resolve(true);
          }
        });
      });
      if (result) {
        const row = await this.read(db, { id });
        return row ? row[0] : null;
      }
      return null;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}
