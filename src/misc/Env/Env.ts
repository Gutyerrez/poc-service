import { readFileSync, existsSync } from 'fs';

import { FileNotFoundException } from 'Exceptions/FileNotFoundException';

import { EnvironmentNotLoadedException } from 'Misc/Env/Exceptions/EnvironmentNotLoadedException';
import { EnvironmentNotFoundException } from 'Misc/Env/Exceptions/EnvironmentNotFoundException';

export class Env {
  private static ENVIRONMENT_FOLDER_PATH = '/home/configuration/vyrnn';
  private static ENVIRONEMNT_FILE_PATH = `${Env.ENVIRONMENT_FOLDER_PATH}/zeraph-main-env`;

  private static ENVIRONMENT: any;

  private static readEnvironmentFile = () => {
    if (!existsSync(Env.ENVIRONMENT_FOLDER_PATH)) {
      throw new FileNotFoundException(
        'environment folder not found',
      );
    }

    if (!existsSync(Env.ENVIRONEMNT_FILE_PATH)) {
      throw new FileNotFoundException(
        'environment file not found',
      );
    }

    const lines = String(
      readFileSync(Env.ENVIRONEMNT_FILE_PATH),
    ).split(/\n/);

    Env.ENVIRONMENT = {};

    for (const line of lines) {
      if (/^$/.test(line)) {
        continue;
      }

      var [ key, value ] = line.split(/=/);

      const regex = /\$\{(.*?)\}/g;

      value.match(regex)?.forEach((match) => {
        const environment = match.split(/\{/)[1].split(/\}/)[0];

        value = value.replace(match, Env.ENVIRONMENT[environment]);
      });

      Env.ENVIRONMENT[key] = value.replaceAll(
        /("|\n)/g,
        '',
      );
    }
  };

  private static get = (key: string): any | undefined => {
    if (!Env.ENVIRONMENT) {
      Env.readEnvironmentFile();

      if (!Env.ENVIRONMENT) {
        throw new EnvironmentNotLoadedException();
      }
    }

    return Env.ENVIRONMENT[key];
  };

  public static getString = (key: string): string => {
    const value = Env.getStringOrNull(key);

    if (!value) {
      throw new EnvironmentNotFoundException();
    }

    return value;
  };

  public static getStringOrNull = (key: string): string | undefined | null => {
    const value = Env.get(key);

    if (!value) {
      return null;
    }

    return String(value);
  };

  public static getInt = (key: string): number => {
    const value = Env.getIntOrNull(key);

    if (!value) {
      throw new EnvironmentNotFoundException();
    }

    return value;
  };

  public static getIntOrNull = (key: string): number | undefined | null => {
    const value = Env.get(key);

    if (!value) {
      return null;
    }

    return Number(value);
  };
}
