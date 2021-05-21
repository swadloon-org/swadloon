---
name: Tags
description:
  Information indicator used to associate content with specific keywords.
tags:
  - molecule
  - label
---

<!-- CODE IMPORTS -->

<!-- prettier-ignore -->
import { Tags } from '../../src/code/tags.code'; 
import TagsCode from '!!raw-loader!../../src/code/tags.code.tsx';

<!-- END CODE IMPORTS -->

<DocHeader props={props}/>

## Variants

Like most components there are three level of importance for buttons:

- Primary
- Secondary
- Tertiary

<ThemeWrapper>
  <Tags />
</ThemeWrapper>

<ThemeWrapper reversed={true}>
  <Tags />
</ThemeWrapper>

<CodeBlock>{TagsCode}</CodeBlock>
