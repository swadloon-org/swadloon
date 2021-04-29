# vercel-rewrites github action

Update vercel.json with Specific rewrites rules depending on the current branch
or trigger.

## Inputs

### `vercel-json-path`

**Required** Path to vercel.json file, e.g. `packages/website/vercel.json`.

## Example usage

```yaml
- name: Update vercel.json rewrites
  uses: ./packages/core-github-actions/lib/vercel-rewrites
  with:
    vercel-json-path: ./packages/vsb-website/vercel.json
```
