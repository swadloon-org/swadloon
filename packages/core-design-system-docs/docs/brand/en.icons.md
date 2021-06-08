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
import { IconArrows } from '../../src/code/icon-arrows.code';
import { IconsImportExample } from '../../src/code/icons-import-example.code';
import IconsImportExampleCode from '!!raw-loader!../../src/code/icons-import-example.code';

<!-- END CODE IMPORTS -->

<DocHeader props={props}/>

## Icons

### Arrows

<IconArrows/>

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

const ionicons5IconComponents: IconComponents<ICON> = {
  [ICON.ARROW_UP]: IoArrowUpOutline,
  [ICON.ARROW_DOWN]: IoArrowDownOutline,
  [ICON.ARROW_LEFT]: IoArrowBackOutline,
  [ICON.ARROW_RIGHT]: IoArrowForwardOutline,
  [ICON.CHECK]: IoCheckmarkOutline,
  [ICON.CHECKBOX_BOX]: IoCheckboxOutline,
  [ICON.CIRCLE]: IoAddCircle,
  [ICON.MENU]: IoMenuOutline,
  [ICON.RADIO]: IoRadioButtonOnOutline,
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
