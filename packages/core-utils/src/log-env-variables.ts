import debug from 'debug';

const log = debug('newrade:env');

export function logEnvVariables<ENV extends Record<string, string | undefined>>({
  packageName,
  env,
}: {
  packageName: string;
  env: Partial<ENV>;
}) {
  const logPackage = log.extend(packageName.replace('@newrade/', ''));

  logPackage(`NODE_ENV is ${env.NODE_ENV}`);
  logPackage(`NODE_DEBUG is ${env.NODE_DEBUG}`);
  logPackage(`DEBUG is ${env.DEBUG}`);
  logPackage(`APP_ENV is ${env.APP_ENV}`);
  logPackage(`APP_PROTOCOL is ${env.APP_PROTOCOL}`);
  logPackage(`APP_HOST is ${env.APP_HOST}`);
  logPackage(`APP_PORT is ${env.APP_PORT}`);
}
