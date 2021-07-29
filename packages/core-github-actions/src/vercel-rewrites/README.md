## `vercel-rewrites` Github Action

Update vercel.json with Specific rewrites rules depending on the current branch
or trigger.

## Inputs

### `working-directory`

**Required** Path to vercel.json file, e.g. `packages/website/vercel.json`.

## Example usage

```yaml
- name: Update vercel.json rewrites
  uses: ./packages/core-github-actions/lib/vercel-rewrites
  with:
    working-directory: ./packages/vsb-website/vercel.json
```
