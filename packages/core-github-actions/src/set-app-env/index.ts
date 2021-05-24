import * as core from '@actions/core';
import * as github from '@actions/github';
import { Context } from '@actions/github/lib/context';
import { DEPLOY_ENV } from '@newrade/core-common';
import { env, ENV } from '../../types/dot-env';
import { runAction } from './action';
import { exportVariable, join } from './utilities';

/**
 * Retrieve env and run the action
 */
runAction(env, github.context);
