---
title: Navbar Button Item
tags:
  - navbar item
  - navigation
  - molecule
componentStatus: ready
componentVersion: v1
componentTests: missing
---

<!-- CODE IMPORTS -->

<!-- prettier-ignore -->
import { NavbarButtonItems } from '../../../src/code/navbar-button-items.code';
import NavbarButtonItemsCode from '!!raw-loader!../../../src/code/navbar-button-items.code';

<!-- END CODE IMPORTS -->

<DocHeader props={props}/>

## Overview

The `NavbarButtonItem` acts like a icon button (it can not remain pressed), it
can trigger an action (e.g. open a panel or sidebar, navigate, open link, etc.).

<!-- prettier-ignore -->
<ThemeWrapper 
  filename={'navbar-button-items.code.tsx'} 
  code={NavbarButtonItemsCode}
  displayControls={true}>
  <NavbarButtonItems />
</ThemeWrapper>

## Features

- Support rendering with choosen icon
- Automatically fits the available space in the containing navbar component

---

## Toggle Button

The `NavbarToggleButtonItem` is a button that can retain a toggled state.

## Features

- Same features as `NavbarButtonItem` and the ability to keep a toggled state
