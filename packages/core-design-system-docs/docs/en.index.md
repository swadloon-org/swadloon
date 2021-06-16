---
name: Design System Overview
description:
  These are the principles that shape how we design every aspect of user
  interfaces.
tags:
  - overview
---

<DocHeader props={props}/>

## Foundations

Foundations are principles and rules that guide the rest of the system. This
system includes the following subjects:

- **Colors**: What colors are available to use
- **Colors Intents**: How colors should be used
- **Effects**: How shadows, transparency and other special effects are used
- **Sizing**: How to size and space out components
- **Iconography**: What and how icons are used in the system
- **Typography**: What fonts to use and how text, headings, labels are presented
- **Layout**: How to organize content, for different viewports
- **Animations**: How to animate layers and effects

## Components

Components include all UI elements starting from small, undivisible ones like
icons, separators... to more complex ones like buttons, inputs and then, larger
ones like forms, data charts and other high-level components.

This organisation follows the
[Atomic Design Principles](https://bradfrost.com/blog/post/atomic-web-design/)
where smaller components (atoms) compose slightly larger ones (molecules) which
go into even larger and more complete components (organisms).

![Atomic Design Illustration](https://bradfrost.com/wp-content/uploads/2019/06/atomic-design-product.jpg)

## Effects

Effects are applied usually used by components, they include:

- Shadows (both outer and inner)
- Text Shadows
- Overlay Effects (transparency)

One way to have consistency between effect is to have predefined effects, e.g. 3
level of box shadow, that components can use, resulting in fewer versions of
those.

## Animations

## Content

Every website or app has to place content (text, images, video, forms, etc) in a
page or a view. As designers and developers we have to think about this for
every project.

The following is an opinionated way of seeing the content we place on pages. We
call this the **Website API**.

Content is organized with [Pages](/design-system/content/pages/),
[Sections](/design-system/content/sections/) and
[Blocks](/design-system/content/blocks/).

## Additional Resources

No design system is made in a vacuum. Here are our recommended reading list,
references and design systems.

### Reading

- [Design System Checklist](https://www.designsystemchecklist.com/): _An
  open-source checklist to help you plan, build and grow your design system._
- [Color within Constraints](https://medium.com/tap-to-dismiss/color-within-constraints-d6f777a3b72d):
  _A scalable color system for digital products_

### Notable Design Systems

Here are, in our opinion, the most notable and extensive design system out
there:

| Company    | Website                                | Design System                                  |
| ---------- | -------------------------------------- | ---------------------------------------------- |
| IBM        | [website](https://www.ibm.com/)        | [link](https://www.carbondesignsystem.com/)    |
| Salesforce | [website](https://www.salesforce.com/) | [link](https://www.lightningdesignsystem.com/) |
| Modulz     | [website](https://www.modulz.app/)     | [Radix UI](https://radix-ui.com/)              |
