---
title: Switches
description:
  Switches allow the user to toggle a control between two values, e.g. On / Off
tags:
  - molecule
componentVersion: v1
---

<!-- CODE IMPORTS -->

<!-- prettier-ignore -->
import { Switches } from '../../src/code/switches.code';
import SwitchesCode from '!!raw-loader!../../src/code/switches.code';
import { SwitchesIcons } from '../../src/code/switches-icons.code';
import SwitchesIconsCode from '!!raw-loader!../../src/code/switches-icons.code';

<!-- END CODE IMPORTS -->

<DocHeader props={props}/>

## States

<ThemeWrapper viewportControl={false}>
  <Switches />
</ThemeWrapper>

## Features

- 1 variant (primary)
- 3 sizes (large, medium, small)
- Support reversed color mode
- Icons support

## Accessibility

If no visible label is provided (e.g. an icon only button), an alternative text
label must be provided to identify the control for accessibility. This should be
added using the `aria-label` prop.

## Variants

<!-- prettier-ignore -->
<ThemeWrapper 
  displayControls={true}
  viewportControl={false}
  filename={'buttons.code.tsx'} 
  code={ButtonsCode}>
  <Switches />
</ThemeWrapper>

<!-- prettier-ignore -->
<ThemeWrapper 
  displayControls={true}
  viewportControl={false}
  filename={'buttons.code.tsx'} 
  code={ButtonsCode}>
  <SwitchesIcons />
</ThemeWrapper>
