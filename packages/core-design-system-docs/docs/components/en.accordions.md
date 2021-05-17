---
name: Accordions
tags:
  - test
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
<CodeBlock>{AccordionsCode}</CodeBlock>
