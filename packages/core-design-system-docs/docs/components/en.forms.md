---
title: Forms
description:
  Forms is used to group inputs that allows users to provide data or configure
  options.
tags:
  - input
  - dropdown
  - organism
---

<!-- CODE IMPORTS -->

<!-- prettier-ignore -->
import { FormLayout } from '../../src/code/form-layout.code';
import { FormSingleButton } from '../../src/code/form-single-button.code';
import { FormGroupedButtons } from '../../src/code/form-grouped-buttons.code';

<!-- END CODE IMPORTS -->

<DocHeader props={props}/>

## Layout

All forms are composed of six elements:

- **Label:** Allow users to understand what the input fields mean.
- **Input field:** Enable users to provide information through a variety of
  different input such as text fields, select fields and many other types.
- **Helper Text:** Gives assistance to the user on how to fill out the field.
- **Placeholder Text:** Gives information on what should be in the field.
- **Action:** Allow users to submit a form.
- **Validation:** Make sure that the data submitted by the user is conform to
  the parameters.

<ThemeWrapper>
 <FormLayout/> 
</ThemeWrapper>

## Content

### Labels

### Default values

### Helper Text

### Placeholder Text

## Button Placement

Single button or grouped buttons should align with the form on the left.

### Single Button

Single button should be a primary button.

<ThemeWrapper>
  <FormSingleButton/>
</ThemeWrapper>

### Grouped Button

Grouped button should have a secondary button on the left and primary button on
the right.

<ThemeWrapper>
  <FormGroupedButtons/>
</ThemeWrapper>
