---
name: Tags
tags:
  - molecule
---

<!-- CODE IMPORTS -->

import { Buttons } from '../../src/code/buttons.code';
import ButtonsCode from '!!raw-loader!../../src/code/buttons.code.tsx';

import { ButtonsSizes } from '../../src/code/buttons-sizes.code';
import ButtonsSizesCode from '!!raw-loader!../../src/code/buttons-sizes.code.tsx';

<!-- END CODE IMPORTS -->

# Tags

## Variants

<ThemeWrapper>
  <Buttons />
</ThemeWrapper>
<CodeBlock>{ButtonsCode}</CodeBlock>

## Reversed Variants

<ThemeWrapper reversed={true}>
  <Buttons />
</ThemeWrapper>

## Sizes

<ThemeWrapper>
  <ButtonsSizes />
</ThemeWrapper>

<CodeBlock>{ButtonsSizesCode}</CodeBlock>

These are the principles that shape how we design every aspect of the interfaces.
