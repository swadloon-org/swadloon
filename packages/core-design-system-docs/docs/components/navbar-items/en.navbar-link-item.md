---
title: Navbar Link Item
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
import { NavbarLinkItems } from '../../../src/code/navbar-link-items.code';
import NavbarLinkItemsCode from '!!raw-loader!../../../src/code/navbar-link-items.code';
import { NavbarLinkExternalItems } from '../../../src/code/navbar-link-external-items.code';
import NavbarLinkExternalItemsCode from '!!raw-loader!../../../src/code/navbar-link-external-items.code';

<!-- END CODE IMPORTS -->

<DocHeader props={props}/>

## Overview

`<NavbarLinkItem/>` renders a link to an internal page (relative url) with a
label and a border. It uses the primary color to indicate that a link is active.

<!-- prettier-ignore -->
<ThemeWrapper 
  filename={'navbar-link-items.code.tsx'} 
  code={NavbarLinkItemsCode}
  displayControls={true}>
  <NavbarLinkItems />
</ThemeWrapper>

## Features

- Active / rest states
- Fits the theme's navbar height
- Can be rendered as link or div
- Support right click to open action
- TODO: ~~_Support icon placement_~~

## Accessibility

- Displays outline when focused
- Insert `role="link"` when needed (element is not `<a/>`)
- TODO: ~~_Activate link with <kbd>Space</kbd> or <kbd>Enter</kbd>_~~

## Resources

- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
