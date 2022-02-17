---
title: Navbar Menu Item
tags:
  - link
  - navigation
  - molecule
componentStatus: ready
componentVersion: v1
componentTests: missing
---

<!-- CODE IMPORTS -->

<!-- prettier-ignore -->
import { NavbavMenuItems } from '../../../src/code/navbar-menu-items.code';
import NavbavMenuItemsCode from '!!raw-loader!../../../src/code/navbar-menu-items.code';

<!-- END CODE IMPORTS -->

<DocHeader props={props}/>

## Overview

`NavbarMenuLinkItem` renders an item that displays a menu (of `NavbarMenuItem`
or others)

<!-- prettier-ignore -->
<ThemeWrapper 
  filename={'navbar-menu-items.code.tsx'} 
  code={NavbavMenuItemsCode}
  displayControls={true}>
  <NavbavMenuItems />
</ThemeWrapper>

## Features

- Active / rest states
- Fits the theme's navbar height

## Accessibility

- TODO

## Resources

- https://www.w3.org/TR/wai-aria-practices/#menu
