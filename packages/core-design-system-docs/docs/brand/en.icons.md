---
name: Icons - ✳️

description:
  Our illustrations extend our brand and vision into simple and accessible
  shapes and animations.
tags:
  - brand
  - art
  - vector
---

<!-- CODE IMPORTS -->

<!-- prettier-ignore -->
import { ICON, ICON_SIZE } from '@newrade/core-design-system';
import { IconSizes } from '../../src/code/icon-sizes.code';
import { IconsImportExample } from '../../src/code/icons-import-example.code';
import IconsImportExampleCode from '!!raw-loader!../../src/code/icons-import-example.code';

<!-- END CODE IMPORTS -->

<DocHeader props={props}/>

## Sizes

The design system defines 3 sizes of icons, for each viewport.

#### Large

<IconSizes size={ICON_SIZE.large}/>

#### Medium

<IconSizes size={ICON_SIZE.medium}/>

#### Small

<IconSizes size={ICON_SIZE.small}/>

## Icons Preview

<Icons/>

## Setup Example

In the exemple below we load Octicons and provide the icon mapping:

```ts
import {
  IoAddCircle,
  IoArrowBackOutline,
  IoArrowDownOutline,
  IoArrowUpOutline,
  IoCheckboxOutline,
  IoCheckmarkOutline,
  IoMenuOutline,
  IoRadioButtonOnOutline,
} from 'react-icons/io5';

const ionicons5IconComponents: IconComponents<Icon> = {
  [Icon.arrowUp]: IoArrowUpOutline,
  [Icon.arrowDown]: IoArrowDownOutline,
  [Icon.arrowLeft]: IoArrowBackOutline,
  [Icon.arrowRight]: IoArrowForwardOutline,
  [Icon.check]: IoCheckmarkOutline,
  [Icon.checkboxBox]: IoCheckboxOutline,
  [Icon.circle]: IoAddCircle,
  [Icon.menu]: IoMenuOutline,
  [Icon.radio]: IoRadioButtonOnOutline,
};
```

Result:

<IconsImportExample/>

## Available Icon Sets

Since we use the excellent
[React Icons](https://react-icons.github.io/react-icons/) project, several icon
set are available:

| Name         | Author | Website                        | License |
| ------------ | ------ | ------------------------------ | ------- |
| Font Awesome | -      | https://fontawesome.com/       | MIT     |
| Octicons     | Github | https://primer.style/octicons/ | MIT     |
