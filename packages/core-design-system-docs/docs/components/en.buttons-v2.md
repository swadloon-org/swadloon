---
name: Buttons
description:
  Buttons allow users to take actions, submit forms with a click or touch.
tags:
  - molecule
version: v2
status: wip
---

<!-- CODE IMPORTS -->

<!-- prettier-ignore -->
import { ButtonsV2 } from '../../src/code/buttons-v2.code'; 
import ButtonsV2Code from '!!raw-loader!../../src/code/buttons-v2.code.tsx';

<!-- END CODE IMPORTS -->

<DocHeader props={props}/>

## Changelog

- v2: Switch to vanilla-extract

## Variants

Like most components there are three level of importance for buttons:

- Primary
- Secondary
- Tertiary

<!-- prettier-ignore -->
<ThemeWrapper 
  displayControls={true} 
  filename={'buttons-v2.code.tsx'}
  code={ButtonsV2Code}>
  <ButtonsV2 />
</ThemeWrapper>
