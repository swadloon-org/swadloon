import chalk from 'chalk';
import * as dotenv from 'dotenv';
import * as t from 'io-ts';
import path from 'path';
import { COMMON_ENV } from './common-env';
import { ERROR_TYPE } from './errors/error.constant';
import { AppError } from './errors/error.model';
import { PathReporter } from './io-ts/reporter';
import { log, LOG_LEVEL } from './log';

/**
 * Utility function to load the .env files in the monorepository.
 *
 * By default it loads the package's .env file (e.g. in packages/<package-name>/.env) and the parent .env file
 * (<root>/.env) which contains variables for the whole repository. It also validates if the passed schema fits
 * what the .env files contain.
 *
 * @see https://github.com/motdotla/dotenv#readme
 * @see https://github.com/gcanti/io-ts/blob/master/index.md
 */
export function loadDotEnv<ENV = COMMON_ENV>({
  schema,
  dotEnvPath,
  packageName,
}: {
  schema: t.IntersectionC<any>;
  dotEnvPath: string;
  packageName: string;
}) {
  log(`Loading .env files`, {
    toolName: packageName || 'load-env-file',
  });

  /**
   * Loads project .env file
   */
  dotenv.config({
    path: dotEnvPath,
  });
  /**
   * Loads repo root .env file
   */
  dotenv.config({
    path: path.resolve(__dirname, '..', '..', '..', '.env'),
  });

  log(`Validating .env files...`, {
    toolName: packageName || 'load-env-file',
  });

  /**
   * Validate if .env satisfies the passed schema with io-ts
   */
  const dotEnvConfig = schema;
  const result = dotEnvConfig.decode(process.env);
  const report = PathReporter.report(result);

  if (report && report.length && !report[0].includes('No errors')) {
    report.map((reason) => {
      log(`${reason}`, {
        toolName: packageName || 'load-env-file',
        level: LOG_LEVEL.ERROR,
      });
    });

    throw new AppError({
      name: ERROR_TYPE.APP_ERROR,
      message: `Invalid dot env`,
    });
  }

  log(`.env files: ${chalk.green('valid')}`, {
    toolName: packageName || 'load-env-file',
  });

  return (process.env as any) as ENV;
}
