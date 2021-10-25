---
title: Navbar Items
description: Navigation items that are used in Navbars components
tags:
  - navigation
  - molecule
---

<!-- CODE IMPORTS -->

<!-- prettier-ignore -->
import { AllNavbarLinkItems } from '../../src/code/navbar-link-items-all.code';
import { NavbarLinkItems } from '../../src/code/navbar-link-items.code';
import NavbarLinkItemsCode from '!!raw-loader!../../src/code/navbar-link-items.code';
import { NavbarLinkExternalItems } from '../../src/code/navbar-link-external-items.code';
import NavbarLinkExternalItemsCode from '!!raw-loader!../../src/code/navbar-link-external-items.code';

<!-- END CODE IMPORTS -->

<DocHeader props={props}/>

## Overview

Navbar item components render logos, links, group of links and other elements in
Navbar components.

<!-- prettier-ignore -->
<ThemeWrapper autoViewport={false}>
  <AllNavbarLinkItems />
</ThemeWrapper>

## Link

<!-- prettier-ignore -->
<ThemeWrapper 
  filename={'navbar-link-items.code.tsx'} 
  code={NavbarLinkItemsCode}
  displayControls={true}>
  <NavbarLinkItems />
</ThemeWrapper>

`<NavbarLinkItem/>` renders a link to an internal page (relative url) with a
label and a border. It uses the primary color to indicate that a link is active.

### Features

- Active / rest states
- Fits the theme's navbar height
- Can be rendered as link or div
- Support right click to open action
- TODO: ~~_Support icon placement_~~

### Accessibility

- Displays outline when focused
- Insert `role="link"` when needed (element is not `<a/>`)
- TODO: ~~_Activate link with <kbd>Space</kbd> or <kbd>Enter</kbd>_~~

### Ressources

- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a

---

## External Link

<!-- prettier-ignore -->
<ThemeWrapper 
  filename={'navbar-link-external-items.code.tsx'} 
  code={NavbarLinkExternalItemsCode}
  displayControls={true}>
  <NavbarLinkExternalItems />
</ThemeWrapper>

Same features as the `<NavbarLinkItem/>` but for external links

### Features

- Open links in a new tab (`target="_blank"`)
- Icon support

### Accessibility

- Focus outline

## Button

## Toggle Button

## Info

## Logo

## Search

## Separator
