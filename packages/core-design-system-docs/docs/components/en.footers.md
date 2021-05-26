---
name: Footers
description:
  Footers are section at the bottom of any page of a site that allow users to
  navigate to other page.
tags:
  - layout
  - navigation
  - organism
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

> The HTML `<footer>` element represents a footer for its nearest sectioning
> content or sectioning root element. A `<footer>` typically contains
> information about the author of the section, copyright data or links to
> related documents.
>
> [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer)

## Simple Footer

The Simple Footer include the pages navigation and social media icons.

<ThemeWrapper>
  <FootersSimple />
</ThemeWrapper>

<CodeBlock>{FootersSimpleCode}</CodeBlock>

## Standard Footer

The Standard Footer include a complete corporate navigation and branding.

<ThemeWrapper>
  <FootersStandard />
</ThemeWrapper>

<CodeBlock>{FootersStandardCode}</CodeBlock>

## Enterprise Footer

The Enterprise Footer include a complete corporate navigation, a form for
newsletter and branding.

<ThemeWrapper>
  <FootersEnterprise />
</ThemeWrapper>

<CodeBlock>{FootersEnterpriseCode}</CodeBlock>

## Social Only Footer

The Social Only Footer only include the social media icons.
