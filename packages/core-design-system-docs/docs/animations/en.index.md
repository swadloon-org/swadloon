---
title: Animations
description:
  Motion is achieve by establishing a set of base principles that are used in
  components,
tags:
  - animation
  - motion
---

<!-- CODE IMPORTS -->

<!-- prettier-ignore -->
import { CSSAnimationControlled } from '../../src/code/css-animation-controlled.code';
import CSSAnimationControlledCode from '!!raw-loader!../../src/code/css-animation-controlled.code';
import { CSSAnimationUncontrolled } from '../../src/code/css-animation-uncontrolled.code';
import CSSAnimationUncontrolledCode from '!!raw-loader!../../src/code/css-animation-uncontrolled.code';

<!-- END CODE IMPORTS -->

<DocHeader props={props}/>

## CSS Animations

> Built in animations are based on [Animation.css](https://animate.style/)

### Components

We provide a simple React component `<CSSAnimation/>` that applies CSS
animations using simple `@keyframes` to its own div and containing children.

Play / Pause control buttons are enabled by the `showControls` property.

<CodeBlock>{CSSAnimationUncontrolledCode}</CodeBlock>

**Result** (internal state only with control buttons):

<ThemeWrapper>
  <CSSAnimationUncontrolled />
</ThemeWrapper>

Alternatively, the animation state can be set from the parent via the
`playState` prop and the imperative `.reset()` handle:

<CodeBlock>{CSSAnimationControlledCode}</CodeBlock>

**Result** (external state and usage of the reset handle function):

<ThemeWrapper>
  <CSSAnimationControlled />
</ThemeWrapper>

### Gestures
