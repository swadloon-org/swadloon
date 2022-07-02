import * as github from '@actions/github';

import { env } from '../../types/dot-env.js';

import { runAction } from './action.js';

/**
 * Retrieve env and run the action
 */
runAction(env, github.context);
