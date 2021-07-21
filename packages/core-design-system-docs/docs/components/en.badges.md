---
name: Badges
description: Information indicator for development or design purpose.
tags:
  - molecule
  - label
---

<!-- CODE IMPORTS -->

<!-- prettier-ignore -->
import { Badges } from '../../src/code/badges.code'; 
import BadgesCode from '!!raw-loader!../../src/code/badges.code.tsx';

<!-- END CODE IMPORTS -->

<DocHeader props={props}/>

## Variants

There are three `kind` for badges:

- 'neutral'
- 'success'
- 'error'

<!-- prettier-ignore -->
<ThemeWrapper
  code={BadgesCode}
  filename={'badges.code.tsx'}
  displayControls={true}>
  <Badges />
</ThemeWrapper>
