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

## Footer Simple

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
