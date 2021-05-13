---
name: Footers
tags:
  - layout
  - navigation
---

<!-- CODE IMPORTS -->

<!-- prettier-ignore -->
import { Footers } from '../../src/code/footers.code'; 
import FootersCode from '!!raw-loader!../../src/code/footers.code.tsx';

<!-- END CODE IMPORTS -->

<DocHeader props={props}/>

> The HTML `<footer>` element represents a footer for its nearest sectioning
> content or sectioning root element. A `<footer>` typically contains
> information about the author of the section, copyright data or links to
> related documents.
>
> [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer)

## Simple

<ThemeWrapper>
  <Footers />
</ThemeWrapper>

<CodeBlock>{FootersCode}</CodeBlock>
