---
name: Accordions
description:
  Accordions are vertically stacked list with a level overview of the content
  associated that can be clicked to reveal or hide.
tags:
  - molecule
---

<!-- CODE IMPORTS -->

<!-- prettier-ignore -->
import { Accordions } from '../../src/code/accordions.code'; 
import AccordionsCode from '!!raw-loader!../../src/code/accordions.code.tsx';

<!-- END CODE IMPORTS -->

<DocHeader props={props}/>

<ThemeWrapper>
  <Accordions />
</ThemeWrapper>

Accordions support reversed mode:

<ThemeWrapper reversed={true}> 
<Accordions /> 
</ThemeWrapper>
<CodeBlock>{AccordionsCode}</CodeBlock>
