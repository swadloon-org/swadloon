---
name: Buttons
description:
  Buttons allow users to take actions, submit forms with a click or touch.
tags:
  - molecule
version: v1
---

<!-- CODE IMPORTS -->

<!-- prettier-ignore -->
import { Buttons } from '../../src/code/buttons.code'; 
import ButtonsCode from '!!raw-loader!../../src/code/buttons.code.tsx';
import { ButtonsSizes } from '../../src/code/buttons-sizes.code'; 
import ButtonsSizesCode from '!!raw-loader!../../src/code/buttons-sizes.code.tsx';
import { ButtonsIcon } from '../../src/code/buttons-icon.code'; 
import ButtonsIconCode from '!!raw-loader!../../src/code/buttons-icon.code';
import { ButtonsStates } from '../../src/code/buttons-states.code';
import ButtonsStatesCode from '!!raw-loader!../../src/code/buttons-states.code';

<!-- END CODE IMPORTS -->

<DocHeader props={props}/>

## Features

- 3 variants (primary, secondary, tertiary)
- 4 sizes (large, medium, small, xSmall)
- Support reversed color mode
- Icon placement

## Accessibility

If no visible label is provided (e.g. an icon only button), an alternative text
label must be provided to identify the control for accessibility. This should be
added using the `aria-label` prop.

## Variants

Like most components there are three level of importance for buttons:

- Primary
- Secondary
- Tertiary

<!-- prettier-ignore -->
<ThemeWrapper 
  displayControls={true} 
  filename={'buttons.code.tsx'} 
  code={ButtonsCode}>
  <Buttons />
</ThemeWrapper>

## Sizes

Four sizes are available for buttons.

<!-- prettier-ignore -->
<ThemeWrapper 
  displayControls={true} 
  filename={'buttons-sizes.code.tsx'} 
  code={ButtonsSizesCode}>
  <ButtonsSizes /> 
</ThemeWrapper>

## Icon

The icon button variant support having the icon on either side and only icon.

<ThemeWrapper>
  <ButtonsIcon />
</ThemeWrapper>

## States

<ThemeWrapper>
  <ButtonsStates />
</ThemeWrapper>

## Changelog
