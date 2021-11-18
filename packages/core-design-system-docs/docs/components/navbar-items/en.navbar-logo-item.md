---
title: Navbar Logo Item
tags:
  - navbar item
  - navigation
  - molecule
---

<!-- CODE IMPORTS -->

<!-- prettier-ignore -->
import { NavbarLinkLogoItems } from '../../../src/code/navbar-logo-link-items.code';
import NavbarLinkLogoItemsCode from '!!raw-loader!../../../src/code/navbar-logo-link-items.code';

<!-- END CODE IMPORTS -->

<DocHeader props={props}/>

## Overview

The `NavbarLogoTextItem` and `NavbarLogoLinkItem` components render a link with
a logo inside. The text variant display the logo in its symbol variant along
with a text.

<!-- prettier-ignore -->
<ThemeWrapper 
  filename={'navbar-logo-link-items.code.tsx'} 
  code={NavbarLinkLogoItemsCode}
  displayControls={true}>
  <NavbarLinkLogoItems />
</ThemeWrapper>

### Features

- Active / rest states
- Fits the theme's navbar height
- Can render the logo in symbol or standard format

## Search
