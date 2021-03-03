---
name: Colors for Data Visualization
tags:
  - test
---

<!-- CODE IMPORTS -->

<!-- END CODE IMPORTS -->

# Color for Data Visualization

## Base Colors

To optain base colors we use the following steps:

1. Start with a base color that is close to the brand main color
1. Adjust saturation so shades will make sense
1. Optain the next colors by doing a rotation of 45deg (HSL), repeat 7 times
1. Manually adjust hue of colors if they are too close to a utility color, we want to avoid having data colors that are too close to green (valid/success), bright yellow (warning), bright red (danger/error).
1. Create shades with Color Compass plugin, find the darkest color that is usable (e.g. around 10-20 lightness).
1. Set the shade 1000 and generate 10 shades from there to set 900, 800, 700 and so on

## Combos

To create a combo, and to ensure sufficient contrast and hue difference, use the following recipe:

1. Start with the base color, go 3 colors right, and pick a shade that is 3-4 levels different than the starting one
1. Repeat until 5 colors are optained

## Testing for accessibility

To ensure that people with color related vision deficiencies can process the colors, test each combo using the Color Blindness plugin on figma.
