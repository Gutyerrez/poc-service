import { Connection } from 'pg';

import knex, { Knex } from 'knex';

import { IDatabaseProvider } from 'Misc/Provider/Database/IDatabaseProvider';

export class PostgreSQLDatabaseProvider implements IDatabaseProvider<Knex> {
  protected provider!: Knex;

  private hostname: string;
  private port: number;
  private username: string;
  private password: string;
  private database: string;
  private schema: string;

  constructor(
    hostname: string,
    port: number,
    username: string,
    password: string,
    database: string,
    schema: string = 'public',
  ) {
    this.hostname = hostname;
    this.port = port;
    this.username = username;
    this.password = password;
    this.database = database;
    this.schema = schema;
  }

  prepare = async () => {
    this.provider = knex({
      client: 'pg',
      connection: {
        host: this.hostname,
        port: this.port,
        user: this.username,
        password: this.password,
        database: this.database,
      },
      pool: {
        min: 0,
        max: 10,
        afterCreate: async (
          connection: Connection,
          _done: (error: Error, connection: Connection) => void,
        ) => connection.query(`SET search_path=${this.schema}`),
      },
    });
  };

  provide = () => this.provider;
}
