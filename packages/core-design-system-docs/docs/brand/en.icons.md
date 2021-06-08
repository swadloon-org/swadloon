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

<CodeBlock>{IconsImportExampleCode}</CodeBlock>

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
