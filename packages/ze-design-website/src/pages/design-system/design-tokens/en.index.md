---
title: Design Tokens Overview
tags:
  - css
  - design tokens
layout: designSystem
template: designSystem
---

<!-- CODE IMPORTS -->

<!-- prettier-ignore -->
<!-- END CODE IMPORTS -->

<DocHeader props={props}/>

For environments that don't use JS/TS design files (e.g. import plain CSS files
or have HTML templates), we have the option of extracting all styles defined in
the system as individual CSS files.

From our design system package's files we have (in `*-design-system/src/css/`):

- buttons`.css.ts`
- colors`.css.ts`
- fonts`.css.ts`
- iconography`.css.ts`
- layout`.css.ts`
- sizing`.css.ts`
- typography`.css.ts`

Using `core-css-extractor`, we compile the resulting CSS variables and styles
into their pure `.css` variant (see files in `*-design-system/src/css-tokens/`):

- buttons`.css`
- colors`.css`
- fonts`.css`
- iconography`.css`
- layout`.css`
- sizing`.css`
- typography`.css`

For convenience, we loaded the files in documentation pages here, but
developpers are encourage to consume the files directly.

Please see the documentation for the `core-css-extractor` package for more
details on its usage.
