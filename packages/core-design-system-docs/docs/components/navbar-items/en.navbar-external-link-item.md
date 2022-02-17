---
title: Navbar External Link Item
tags:
  - navbar item
  - navigation
  - molecule
  - docs
componentStatus: ready
componentVersion: v1
componentTests: missing
---

<!-- CODE IMPORTS -->

<!-- prettier-ignore -->
import { NavbarLinkItems } from '../../../src/code/navbar-link-items.code';
import NavbarLinkItemsCode from '!!raw-loader!../../../src/code/navbar-link-items.code';
import { NavbarLinkExternalItems } from '../../../src/code/navbar-link-external-items.code';
import NavbarLinkExternalItemsCode from '!!raw-loader!../../../src/code/navbar-link-external-items.code';

<!-- END CODE IMPORTS -->

<DocHeader props={props}/>

## Overview

The `<NavbarExternalLinkItem/>` component has similar features as the
`<NavbarLinkItem/>` but for external links.

<!-- prettier-ignore -->
<ThemeWrapper 
  filename={'navbar-link-external-items.code.tsx'} 
  code={NavbarLinkExternalItemsCode}
  displayControls={true}>
  <NavbarLinkExternalItems />
</ThemeWrapper>

## Features

- Open links in a new tab (`target="_blank"`)
- Icon support

## Accessibility

- Focus outline

## Resources

- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
