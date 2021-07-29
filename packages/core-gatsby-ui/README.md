> **Note:** this README is available online at
> [zedesignsystem.com/core-docs/packages/core-react-ui/](https://zedesignsystem.com/core-docs/packages/core-react-ui/)

---

<div style="display: grid; width: fit-content; gap: 20px; grid-auto-flow: column;">
  <img height="30" src="/core-docs-assets/gatsby-logo-standard.svg"/>
  <img height="30" src="/core-docs-assets/reactjs-logo-standard.svg"/>
  <img height="30" src="/core-docs-assets/mdx-logo-standard.svg"/>
</div>

## How to Use

### Development

Normally you will want to start the development build from the root directory to
build all required core packages at once — but in some cases you might want to
build just a specific package.

```bash
yarn start
```

### Build

There is no need to build this package with `tsc` since it is consumed by
importing source files directly:

```bash
import { Button } from '@newrade/core-gatsby-ui/src';
```

### Test

```bash
yarn test
```

## Features

TODO

## References

### Dependencies

| Name          | Source or Documentation                                  | Build Dependency | Run Time Dependency |
| ------------- | -------------------------------------------------------- | ---------------- | ------------------- |
| core-react-ui | [see `core-react-ui`](/core-docs/packages/core-react-ui) | no               | yes                 |

---
