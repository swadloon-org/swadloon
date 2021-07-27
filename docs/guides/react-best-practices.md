---
subject: Guides
title: React Best Practices
description:
tags:
  - react
  - performance
status: draft
---

<DocHeader props={props}/>

## Lazy Loading

```tsx
const LazySidebarRenderer = loadable(
  () =>
    import(
      /* webpackExports: "SidebarRenderer" */ '@newrade/core-gatsby-ui/src'
    ),
  {
    resolveComponent: (
      components: typeof import('@newrade/core-gatsby-ui/src/sidebar/sidebar-renderer')
    ) => components.SidebarRenderer,
  }
);
```
