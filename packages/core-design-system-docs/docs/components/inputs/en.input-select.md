---
title: Input Select
tags:
  - select
  - dropdown
  - input
componentStatus: ready
componentVersion: v1
componentTests: missing
---

<!-- CODE IMPORTS -->

<!-- prettier-ignore -->
import { InputSelects } from '../../../src/code/input-selects.code';
import InputSelectsCode from '!!raw-loader!../../../src/code/input-selects.code';

<!-- END CODE IMPORTS -->

<DocHeader props={props}/>

## Overview

`InputSelect` renders a simple select element, allowing user to select a single
value from a dropdown.

<!-- prettier-ignore -->
<ThemeWrapper 
  filename={'input-selects.code.tsx'} 
  code={InputSelectsCode}
  displayControls={true}>
  <InputSelects />
</ThemeWrapper>

## Features

- Variants: `primary`
- Sizes: `large`, `medium`, `small`, `xSmall`
- States: `rest`, `valid`, `warning`, `error`
- Disabled style
- Icon placement on the left side

## Accessibility

- TODO

## Resources

- https://www.w3.org/TR/wai-aria-practices/#Listbox
