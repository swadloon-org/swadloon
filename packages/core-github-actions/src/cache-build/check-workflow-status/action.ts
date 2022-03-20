import * as core from '@actions/core';
import * as github from '@actions/github';
import { Context } from '@actions/github/lib/context';
import fetch from 'node-fetch';

import { ENV } from '../../../types/dot-env';

type ActionEnv = Partial<ENV>;
type ActionInput = 'workflow';

/**
 * `check-workflow-status` uses the Github API to retrieve the status of a workflow on a particular branch
 *
 * env-cmd -x curl -X GET -u $GH_TOKEN:x-oauth-basic 'https://api.github.com/repos/newrade/newrade/actions/workflows/vsb-api-workflow.yml/runs?branch=master&event=push'
 *
 * Note: this action depends on [github-slug-action](https://github.com/rlespinasse/github-slug-action)
 */
export function runAction(env?: ActionEnv, githubContext?: Context) {
  try {
    if (!env) {
      throw Error(`env must be passed to ${runAction.name}`);
    }

    const repo = `${github.context.repo.owner}/${github.context.repo.repo}`;
    const branch = env.GITHUB_REF_SLUG;
    const workflow = core.getInput('workflow');
    // https://docs.github.com/en/developers/apps/building-github-apps/authenticating-with-github-apps
    const token = core.getInput('github-token');

    if (!workflow) {
      throw Error(`"workflow" input must be provided for this action`);
    }

    if (!token) {
      throw Error(`"github-token" input must be provided for this action`);
    }

    core.debug(`Branch that triggered the workflow: ${env.GITHUB_REF_SLUG}`);
    core.info(`Retrieving workflow status for ${workflow} in repo: ${repo}`);

    const url = `https://x-access-token:${token}@api.github.com/repos/${repo}/actions/workflows/${workflow}/runs?branch=${branch}&event=push`;

    core.info(`fetching: ${url}`);

    fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    })
      .then((result) => {
        if (result.status >= 200 && result.status < 400) {
          return result.json();
        }

        core.setFailed(`failed to retrieve runs, status: ${result.status}`);
      })
      .then((response: { workflow_runs: { conclusion: 'success' | 'failure' | null }[] }) => {
        const workflowRuns = response.workflow_runs;

        if (!workflowRuns?.length) {
          core.info(`no runs received for workflow, skipping...`);
          core.setOutput('conclusion', 'skip');
          return;
        }

        const workflowConclusion = workflowRuns[0].conclusion;
        core.info(`conclusion: ${workflowConclusion}`);

        if (!workflowConclusion) {
          core.info(`conclusion was null, skipping`);
          core.setOutput('conclusion', 'skip');
          return;
        }

        core.setOutput('conclusion', workflowConclusion);
      })
      .catch((error) => {
        core.setFailed(error.message);
      });
  } catch (error: any) {
    core.setFailed(error.message);
  }
}
