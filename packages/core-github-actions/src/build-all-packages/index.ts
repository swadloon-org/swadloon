import * as core from '@actions/core';
import * as github from '@actions/github';
import { DEPLOY_ENV } from '@newrade/core-env';

try {
  console.info(`github.context.ref`, github.context.ref);

  core.exportVariable('APP_URL', 'http://localhost');
  core.exportVariable('APP_PORT', '9000');

  switch (github.context.ref) {
    case 'refs/heads/dev': {
      core.exportVariable('APP_ENV', DEPLOY_ENV.DEV);
      break;
    }
    case 'refs/heads/master': {
      core.exportVariable('APP_ENV', DEPLOY_ENV.STAGING);
      break;
    }
    case 'refs/heads/release': {
      core.exportVariable('APP_ENV', DEPLOY_ENV.PRODUCTION);
      break;
    }
    default: {
      console.info('setting default APP_ENV');
      core.exportVariable('APP_ENV', DEPLOY_ENV.DEV);
    }
  }
} catch (error) {
  core.setFailed(error.message);
}
