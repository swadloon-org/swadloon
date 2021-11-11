---
title: Accessibility - ♿
description:
tags:
  - introduction
---

<DocHeader props={props}/>

## Animations

- Reduce motion is supported with the `prefers-reduced-motion: reduce` media
  query.
  [docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_Media_Queries_for_Accessibility#reduced_motion)

## Color Schemes

- Light or dark theme will be set depending on the user's system preference
  (`prefers-color-scheme` media query)
  [docs](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)

## Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)

For an overview of what WAI-ARIA is, visit the
[official docs](https://www.w3.org/WAI/standards-guidelines/aria/)

- Our components aim to follows the
  [WAI-ARIA 1.1](https://www.w3.org/TR/wai-aria/) standards and provides
  components that matches those described in
  [WAI-ARIA Authoring Practices 1.1](https://www.w3.org/TR/wai-aria-practices/).
