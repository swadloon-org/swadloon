---
title: Colors - 🌈
description:
  Colors allow users to apply color in a design system in a meaningful way based
  on the primary and seconday colors of a brand.
tags:
  - foundations
  - colors
---

<!-- CODE IMPORTS -->

<!-- prettier-ignore -->
import { ColorPrimary } from '../../src/code/color-primary.code';
import { ColorGreyscale } from '../../src/code/color-greyscale.code';
import { ColorAccent } from '../../src/code/color-accent.code';
import { ColorUtility } from '../../src/code/color-utility.code';

<!-- END CODE IMPORTS -->

<DocHeader props={props}/>

## Primary

A primary color is the color most frequently used accross a design system.

<ThemeWrapper>
  <ColorPrimary />
</ThemeWrapper>

## Accent

An accent color is the color used to accent select parts of a design system.

<ThemeWrapper>
  <ColorAccent />
</ThemeWrapper>

## Greys

Grey colors are colors usually used for text, background and to contrast
elements.

<ThemeWrapper>
  <ColorGreyscale />
</ThemeWrapper>

## Utility

Utility colors are colors meanful to reflect a status, red for errors, green for
success and yellow for warning.

<ThemeWrapper>
  <ColorUtility />
</ThemeWrapper>
