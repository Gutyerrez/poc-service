import { IDatabaseProvider } from 'Misc/Provider/Database/IDatabaseProvider';

import { Pool, PoolClient } from 'pg';

export class PostgreSQLDatabaseProvider implements IDatabaseProvider<PoolClient> {
  protected provider!: PoolClient;

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
    this.provider = await new Pool({
      host: this.hostname,
      port: this.port,
      user: this.username,
      password: this.password,
      database: this.database,
    }).connect();

    this.provider.query(`SET search_path TO ${this.schema}`);
  };

  provide = () => this.provider;
}
