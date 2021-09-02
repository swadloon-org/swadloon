---
title: Sidebars
description:
  Sidebars or side navigation, are used for information and actions relating to
  the current screen.
tags:
  - navigation
  - organism
---

<!-- CODE IMPORTS -->

<!-- prettier-ignore -->
import { SidebarsStandard } from '../../src/code/sidebar-standard.code'; 
import SidebarsStandardCode from '!!raw-loader!../../src/code/sidebar-standard.code.tsx';

<!-- END CODE IMPORTS -->

<DocHeader props={props}/>

## Features

- 2 layouts (standard and documentation)
- Support reversed color mode
- Swipe left gesture support to close
- Backdrop to catch clicks
- Vertical scroll

## Components

Sidebar are located on the side of a layout.

<!-- prettier-ignore -->
<ThemeWrapper
  code={SidebarsStandardCode}
  filename={'sidebars-standard.code.tsx'}
  displayControls={true}>
  <SidebarsStandard />
</ThemeWrapper>
