import { IDatabaseProvider } from 'Misc/Provider/Database/IDatabaseProvider';

import knex, { Knex } from 'knex';

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
      },
    });

    // TODO setup schema
  };

  provide = () => this.provider;
}
