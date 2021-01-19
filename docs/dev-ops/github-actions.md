# Github Actions

## Docs

- https://docs.github.com/en/free-pro-team@latest/actions/creating-actions/creating-a-javascript-action
- https://docs.github.com/en/free-pro-team@latest/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on
- https://docs.github.com/en/free-pro-team@latest/actions/creating-actions/metadata-syntax-for-github-actions#runs-for-javascript-actions

## Local Setup

### Act

https://github.com/nektos/act

Usage:

```bash
# list actions
act -l

# simulate push
act push -j build_all_packages  --reuse --secret-file .env --secret-file packages/core-gatsby-starter/.env
```

---
