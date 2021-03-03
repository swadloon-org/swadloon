---
name: Sizing
tags:
  - test
---

<!-- CODE IMPORTS -->

import { SizingDesktop } from '../../src/code/fondations/sizing/sizing-desktop.code';
import { SizingTablet } from '../../src/code/fondations/sizing/sizing-tablet.code';
import { SizingMobile } from '../../src/code/fondations/sizing/sizing-mobile.code';

<!-- END CODE IMPORTS -->

# Sizing

Sizes of components and distances between elements in layouts are handled by setting a modular scale. The values
in the scale can be set manually or optained by using an exponential function. For example, on desktop, where
the screen real estate is large, one could the [Golden ratio](https://en.wikipedia.org/wiki/Golden_ratio) as the exponential factor.

## Scale

A scale from `x0` to `x10` is defined for each viewport (mobile, tablet and desktop).
The values are also available as css variables `var(--sizing-x1)`), and they can be used by the
theming system (e.g.`cssTheme.sizing.var.x1`).

#### Desktop

<SizingDesktop />

#### Tablet

<SizingTablet />

#### Mobile

<SizingMobile />
