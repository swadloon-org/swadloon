import { COMMON_ENV } from './common-env';
import { log } from './log';

export function logEnvVariables<ENV extends COMMON_ENV>({ packageName, env }: { packageName: string; env: ENV }) {
  log(`APP_ENV is ${env.APP_ENV}`, {
    toolName: 'mir-website',
  });
  log(`APP_URL is ${env.APP_URL}`, {
    toolName: 'mir-website',
  });
}
