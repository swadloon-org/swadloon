# `sync-forks`

## Overview

```yaml
- name: Sync forks with parent repo
  if: ${{ github.event_name == 'push' && github.ref == 'refs/heads/master' }}
  uses: ./packages/core-github-actions/built/sync-forks
  env:
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
  with:
    forks:
      - git@github.com:org/repo-name.git
      - git@github.com:org/repo-name.git
      - git@github.com:org/repo-name.git
      - git@github.com:org/repo-name.git
```

## References

https://github.com/actions/toolkit
