import { createLogger, format, transports } from 'winston';

type Options = {
  host: string; // 'http-intake.logs.datadoghq.com'
  path: string; // /v1/input/<APIKEY>?ddsource=nodejs&service=<APPLICATION_NAME>'
  ssl: true;
};

/**
 * Creates an instance of a winston logger
 * @see https://docs.datadoghq.com/logs/log_collection/nodejs/
 */
export function createDatalogLogger(options: Options) {
  return createLogger({
    level: 'info',
    exitOnError: false,
    format: format.json(),
    transports: [new transports.Http(options)],
  });
}

// Example logs
// logger.log('info', 'Hello simple log!');
// logger.info('Hello log with metas', { color: 'blue' });
