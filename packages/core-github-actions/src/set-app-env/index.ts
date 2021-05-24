import * as github from '@actions/github';
import { env } from '../../types/dot-env';
import { runAction } from './action';

/**
 * Retrieve env and run the action
 */
runAction(env, github.context);
