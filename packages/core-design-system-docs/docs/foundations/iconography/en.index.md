---
title: Iconography
description:
  As visual symbols, icons can help representing ideas, objects or actions. They
  can communicate messages at a glance, afford interactivity, and draw attention
  to important information.
tags:
  - brand
  - art
  - vector
---

<!-- CODE IMPORTS -->

<!-- prettier-ignore -->
<!-- END CODE IMPORTS -->

<DocHeader props={props}/>

## Crafting Pixel Perfect Icons and Illustrations

### Vector Coordinates

Set up your design software to round vector coordinates to integer pixel. Using
half pixel or decimal is fine as long as you verify that the pixel rendering is
looking good.

### Grid

For smaller vectors like 16px icon, always work with a corresponding grid.

Set up your frame and grid at the minimum size supported by your illustration.

Verify the rendering of each icon and illustration using the pixel preview
feature.

### Vector Scaling

Icons and illustrations should never be used at a scale that is _smaller_ than
originally designed.

Most professional icon set comes with specific pixel sizes (e.g. 12px, 16px,
24px, etc), so a kit designed at 24px should not be used at a smaller scale.

When upscaling a vector to a bigger size, use specific ratio whenever possible.
For instance, a 12px icon kit will probably interpolate well to 24px but will
probably look degraded at 15px since its shapes, strokes and coordinates were
optimized for the original grid.

### Retina (hi-dpi) vs Non Retina Displays

Retina display (Apple) or any high DPI (dot-per-inch) display can be more
forgiving for vector that are rendered smaller than designed.

That being said, this is a common mistake that designers do since most users and
devices don't have high dpi screens.

The takeaway:

- Test vector files and their export (e.g. png) on regular PC's display and
  laptop screens

## Resources

- [How to Master Pixel Perfect Icons](https://iconutopia.com/how-to-design-pixel-perfect-icons/)
