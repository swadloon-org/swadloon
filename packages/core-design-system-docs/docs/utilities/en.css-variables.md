---
title: CSS Variables
tags:
  - utilities
---

<!-- CODE IMPORTS -->

<!-- prettier-ignore -->
import { sizingVars, typographyVars, colorVars, layoutVars } from '@newrade/core-react-ui/theme';
import { CSSVariables } from '../../src/code/css-variables.code';

<!-- END CODE IMPORTS -->

<DocHeader props={props}/>

<!-- prettier-ignore -->
<details>
  <summary>Sizing Variables</summary>
  <CSSVariables vars={sizingVars} preview={'raw'}/>
</details>

<!-- prettier-ignore -->
<details>
  <summary>Color Variables</summary>
  <CSSVariables vars={colorVars} preview={'color'}/>
</details>

<!-- prettier-ignore -->
<details>
  <summary>Layout Variables</summary>
  <CSSVariables vars={layoutVars} preview={'raw'}/>
</details>
