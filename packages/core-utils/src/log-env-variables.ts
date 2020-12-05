import { log } from './log';

export function logEnvVariables<ENV extends Record<string, string>>({
  packageName,
  env,
}: {
  packageName: string;
  env: Partial<ENV>;
}) {
  log(`NODE_ENV is ${env.NODE_ENV}`, {
    toolName: packageName,
  });

  log(`APP_ENV is ${env.APP_ENV}`, {
    toolName: packageName,
  });

  log(`APP_URL is ${env.APP_URL}`, {
    toolName: packageName,
  });
}
