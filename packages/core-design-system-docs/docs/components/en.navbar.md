---
title: Navigation
description:
  Navigation are used for information and actions relating to the current
  screen.
tags:
  - navigation
  - organism
---

<!-- CODE IMPORTS -->

<!-- prettier-ignore -->
import { Navbars } from '../../src/code/navbars.code'; 
import NavbarsCode from '!!raw-loader!../../src/code/navbars.code.tsx';

<!-- END CODE IMPORTS -->

<DocHeader props={props}/>

## Navbars

Navbars are on top of the screen and provides content and actions such as
branding, screen titles and navigation items.

<!-- prettier-ignore -->
<ThemeWrapper
  code={NavbarsCode}
  filename={'navbars.code.tsx'}
  displayControls={true}>
  <Navbars />
</ThemeWrapper>