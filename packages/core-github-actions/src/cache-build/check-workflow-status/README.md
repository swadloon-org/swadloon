# `check-workflow-status`

## Overview

Retrieve a status from a workflow on a specific branch

bash command for inspiration:

```
output=$(curl -sSL -X GET -G -H "Accept: application/vnd.github.v3+json" -d "branch=${{ env.GITHUB_REF_SLUG }}" -d "event=push" https://api.github.com/repos/${{ github.repository }}/actions/workflows/${{ github.event.inputs.ci_website }}/runs | jq -r '.workflow_runs[0] | "\(.conclusion)"')
```
