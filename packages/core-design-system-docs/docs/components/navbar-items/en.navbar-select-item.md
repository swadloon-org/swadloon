---
title: Navbar Select Item
tags:
  - select
  - dropdown
  - navigation
  - molecule
componentStatus: ready
componentVersion: v1
componentTests: missing
---

<!-- CODE IMPORTS -->

<!-- prettier-ignore -->
import { NavbavSelectItems } from '../../../src/code/navbar-select-items.code';
import NavbavSelectItemsCode from '!!raw-loader!../../../src/code/navbar-select-items.code';

<!-- END CODE IMPORTS -->

<DocHeader props={props}/>

## Overview

`NavbarSelectItem` allow user to select a value from a dropdown.

<!-- prettier-ignore -->
<ThemeWrapper 
  filename={'navbar-select-items.code.tsx'} 
  code={NavbavSelectItemsCode}
  displayControls={true}>
  <NavbavSelectItems />
</ThemeWrapper>

## Features

- Behave like `InputSelect`
- Fits the theme's navbar height

## Accessibility

- TODO

## Resources

- https://www.w3.org/TR/wai-aria-practices/#Listbox
