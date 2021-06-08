import * as core from '@actions/core';
import * as github from '@actions/github';
import { Context } from '@actions/github/lib/context';
import fetch from 'node-fetch';
import { ENV } from '../../types/dot-env';

type ActionEnv = Partial<ENV>;
type ActionInput = 'workflow';

/**
 * `check-workflow-status` uses the Github API to retrieve the status of a workflow on a particular branch
 *
 * . ./.env && curl -X GET -u $GH_TOKEN:x-oauth-basic 'https://api.github.com/repos/newrade/newrade/actions/workflows/vsb-api-workflow.yml/runs?branch=master&event=push'
 *
 * Note: this action depends on [github-slug-action](https://github.com/rlespinasse/github-slug-action)
 */
export function runAction(env?: ActionEnv, githubContext?: Context) {
  try {
    if (!env) {
      throw Error(`env must be passed to ${runAction.name}`);
    }

    const repo = github.context.repo.repo || 'newrade/newrade';
    const branch = env.GITHUB_REF_SLUG;
    const workflow = core.getInput('workflow');

    if (!workflow) {
      throw Error(`workflow must be provided for this action`);
    }

    core.debug(`Branch that triggered the workflow: ${env.GITHUB_REF_SLUG}`);
    core.info(`Retrieving workflow status for ${workflow} in repo: ${repo}`);

    const url = `https://api.github.com/repos/${repo}/actions/workflows/${workflow}/runs?branch=${branch}&event=push`;

    core.info(`fetching: ${url}`);

    fetch(url, {
      method: 'GET',
      headers: {
        // @ts-ignore
        Authorization: `Bearer ${env.GH_TOKEN}`,
        Accept: 'application/vnd.github.v3+json',
      },
    })
      .then((result) => {
        if (result.status >= 200 && result.status < 400) {
          return result.json();
        }

        core.setFailed(`failed to retrieve runs, status: ${result.status}`);
      })
      .then((response: { workflow_runs: { conclusion: 'success' | 'failure' }[] }) => {
        if (!response?.workflow_runs?.length) {
          core.setFailed(`no runs received for workflow`);
          return;
        }

        core.info(response.workflow_runs[0].conclusion);
        core.setOutput('conclusion', response.workflow_runs[0].conclusion);
      })
      .catch((error) => {
        core.setFailed(error.message);
      });

    // output=$(curl -sSL -X GET -G -H "Accept: application/vnd.github.v3+json" -d "branch=${{ env.GITHUB_REF_SLUG }}" -d "event=push" https://api.github.com/repos/${{ github.repository }}/actions/workflows/${{ github.event.inputs.ci_website }}/runs | jq -r '.workflow_runs[0] | "\(.conclusion)"')
  } catch (error) {
    core.setFailed(error.message);
  }
}
