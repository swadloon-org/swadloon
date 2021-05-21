# Github Actions

## Docs

- https://docs.github.com/en/free-pro-team@latest/actions/creating-actions/creating-a-javascript-action
- https://docs.github.com/en/free-pro-team@latest/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on
- https://docs.github.com/en/free-pro-team@latest/actions/creating-actions/metadata-syntax-for-github-actions#runs-for-javascript-actions

## Workflow Dispatch

Docs:
https://docs.github.com/en/rest/reference/actions#create-a-workflow-dispatch-event

curl \
 -X POST \
 -H "Accept: application/vnd.github.v3+json" \
 -H "Authorization: Bearer ..." \

https://api.github.com/repos/newrade/newrade/actions/workflows/vsb-workflow.yml/dispatches
\
 -d '{"ref":"refs/heads/dev"}'

## Debugging Logs

https://github.com/actions/toolkit/blob/master/docs/action-debugging.md

## Local Setup

### Act

https://github.com/nektos/act

Usage:

```bash
# list actions
act -l

# simulate push
act push -j vsb-website --reuse --secret-file .env --secret-file packages/website/.env

act push -W ./.github/workflows/vsb-website-workflow.yml -j build-test-deploy --reuse --secret-file .env --secret-file ./packages/vsb-website/.env --insecure-secrets
```