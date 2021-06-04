---
name: Navigation
description:
  Navigation are used for information and actions relating to the current
  screen.
tags:
  - navigation
  - organism
---

<!-- CODE IMPORTS -->

<!-- prettier-ignore -->
import { Navigation } from '../../src/code/navigation.code'; 
import NavigationCode from '!!raw-loader!../../src/code/navigation.code.tsx';

<!-- END CODE IMPORTS -->

<DocHeader props={props}/>

## NavBars

Navbars are on top of the screen and provides content and actions such as
branding, screen titles and navigation items.

<ThemeWrapper>
  <Navigation />
</ThemeWrapper>

<CodeBlock>{NavigationCode}</CodeBlock>

## Sidebars

Sidebars are on the right or the left side of the screen and provides actions
such as branding and navigation items.
