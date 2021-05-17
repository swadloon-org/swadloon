---
name: Footers
tags:
  - layout
  - navigation
---

<!-- CODE IMPORTS -->

<!-- prettier-ignore -->
import { FootersSimple } from '../../src/code/footer-simple.code'; 
import FootersSimpleCode from '!!raw-loader!../../src/code/footer-simple.code.tsx';
import { FootersStandard } from '../../src/code/footer-standard.code'; 
import FootersStandardCode from '!!raw-loader!../../src/code/footer-standard.code.tsx';
import { FootersEnterprise} from '../../src/code/footer-enterprise.code'; 
import FootersEnterpriseCode from '!!raw-loader!../../src/code/footer-enterprise.code.tsx';

<!-- END CODE IMPORTS -->

<DocHeader props={props}/>

<<<<<<< HEAD
## Footer Simple
=======
> The HTML `<footer>` element represents a footer for its nearest sectioning
> content or sectioning root element. A `<footer>` typically contains
> information about the author of the section, copyright data or links to
> related documents.
>
> [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer)

## Simple
>>>>>>> refs/remotes/origin/dev

<ThemeWrapper>
  <FootersSimple />
</ThemeWrapper>

<CodeBlock>{FootersSimpleCode}</CodeBlock>

## Footer Standard

<ThemeWrapper>
  <FootersStandard />
</ThemeWrapper>

<CodeBlock>{FootersStandardCode}</CodeBlock>

## Footer Enterprise

<ThemeWrapper>
  <FootersEnterprise />
</ThemeWrapper>

<CodeBlock>{FootersEnterpriseCode}</CodeBlock>
