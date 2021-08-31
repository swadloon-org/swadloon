> **Note:** this README is available online at
> [zedesignsystem.com/core-docs/packages/core-react-ui/](https://zedesignsystem.com/core-docs/packages/core-react-ui/)

---

<div style="display: grid; width: fit-content; gap: 20px; grid-auto-flow: column;">
  <img height="30" src="/core-docs-assets/reactjs-logo-standard.svg"/>
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
import { Button } from '@newrade/core-react-ui';
```

### Test

```bash
yarn test
```

### DLL

To build a webpack DLL for react, use:

```bash
yarn build:dll
```

## Features

TODO

## References

### Dependencies

| Name     | Url                                                       | Build Dependency | Run Time Dependency |
| -------- | --------------------------------------------------------- | ---------------- | ------------------- |
| polished | [polished](https://github.com/styled-components/polished) | yes              | no                  |
