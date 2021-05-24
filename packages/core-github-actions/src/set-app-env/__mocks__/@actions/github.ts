import type { Context } from '@actions/github/lib/context';

export const context: Context = {
  payload: {},
  eventName: 'push',
  sha: 'asfasdfd',
  ref: 'refs/heads/dev',
  workflow: 'test',
  action: 'set-app-env',
  actor: '',
  job: '',
  runNumber: 1,
  runId: 1,
  get issue() {
    return { owner: 'test', repo: 'test', number: 1 };
  },
  get repo() {
    return {
      owner: 'test',
      repo: 'test',
    };
  },
};
