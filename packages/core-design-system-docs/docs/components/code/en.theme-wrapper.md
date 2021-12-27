---
title: ThemeWrapper
description:
  Utility component to render React components in an iframe with viewport
  controls. It can also render source code with syntax highlighting.
tags:
  - organism
  - prism
  - tools
  - development
  - documentation
jsdoc: ['ThemeWrapper', 'ThemeWrapperProps']
---

<!-- CODE IMPORTS -->

<!-- prettier-ignore -->
import { CodeHighlightExamples } from '../../src/code/code.code'; 
import CodeHighlightExamplesCode from '!!raw-loader!../../src/code/code.code.tsx';

<!-- END CODE IMPORTS -->

<DocHeader props={props}/>

## Rendering

`ThemeWrapper` is designed to be used as a high level utility component to
showcase code samples or complete components. We use it extensively in our
documentation.

Internally, `ThemeWrapper` uses a number of components, including `CodeBlock`
and `CodeHighlight`, both of those can be used separately.

### Basic Use

The most simple use case is to simply pass what you want to render as children:

```jsx
<ThemeWrapper>
  <Stack gap={['2em']}>
    <Heading>ThemeWrapper</Heading>
    <Paragraph>Rendering a paragraph</Paragraph>
    <Paragraph>
      <Lorenipsum />
    </Paragraph>
  </Stack>
</ThemeWrapper>
```

`ThemeWrapper` will render the components with the current React Context theme:

<!-- prettier-ignore -->
<ThemeWrapper>
  <Stack gap={['2em']}>
    <Heading>ThemeWrapper</Heading>
    <Paragraph>Rendering a paragraph</Paragraph>
    <Paragraph><Lorenipsum/></Paragraph>
  </Stack>
</ThemeWrapper>

**Note**: You may use the above syntax in any markdown document without any
additional imports (they are already included in our base markdown components)
✅

### Theming

By default, when `displayControls` is `true`, `ThemeWrapper` will display a
dropdown with the available themes.

By default, it will auto select the theme used by the site or application. But
you can use it to preview what a different theme could look like on a specific
component.

Here is an example where we render a React-TypeScript file with all the options
enabled:

<!-- prettier-ignore -->
<ThemeWrapper displayControls={true}>
  <Stack gap={['2em']}>
    <Heading>ThemeWrapper</Heading>
    <Paragraph>Rendering a paragraph</Paragraph>
    <Paragraph><Lorenipsum/></Paragraph>
  </Stack>
</ThemeWrapper>

### Viewport Controls

`ThemeWrapper` uses React's Portal feature to render its children inside an
[iframe](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe).

This allows us to control the viewport to preview responsive aspects of
components.

Here is an example where we render a React-TypeScript file with all the options
enabled:

<!-- prettier-ignore -->
<ThemeWrapper
  code={CodeHighlightExamplesCode}
  filename={'code.code.tsx'}
  displayControls={true}
  displayThemeSelection={false}
  viewportControl={true}
  viewportOverflowX={'auto'}
  viewport={'mobile'}>
  <Stack gap={['2em']}>
    <Heading>ThemeWrapper</Heading>
    <Paragraph>Rendering a paragraph</Paragraph>
    <Paragraph><Lorenipsum/></Paragraph>
  </Stack>
</ThemeWrapper>

## API

<DocPropsTable props={props}/>
