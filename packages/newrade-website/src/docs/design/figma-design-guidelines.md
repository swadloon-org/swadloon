---
name: Docs
description: Overview of the documentation
tags:
  - figma
  - design ui
---

<CodeBlock
className={'language-json'}>{JSON.stringify(props.data.file.childMdx.frontmatter,
null, 2)}</CodeBlock>

# Figma Design Guidelines

## Components

Components are elements that we can use multiple times in your design system.
Components are made to help create and manage consistent design.

The two aspects of a component:

1. A main component defines the properties of the component
2. An instance is a copy of the component. It's linked to the main component and
   can receive any updates made to the component itself.

Components can be created within a single file or in multiple files.

## Variants

As we create components and build out a design system, many will need various
states and sizes. Creating variants from this same component makes it easier to
maintain.

### Create new variant

To create a variant, we use the following steps:

1. Select a component
2. In the right sidebar, click the + beside the variants section to add your
   first variant.
3. Add propreties and values to the variants, such as size, variant, type, state
   and orientation.

### Combine components as variants

To combine two components as variants, we use the following steps:

1. Select the two components
2. In the right sidebar, click the + beside the variants section to combine the
   components as variants
3. Add propreties and values to the variants, such as size, variant, type, state
   and orientation.

## Manage variants

### Rename properties and values

To rename a property of the variants set, we use the following steps:

1. Select the variants set
2. Click on the property and rename the name of the property
3. Press `enter` to apply

To rename a value of the variants set, we use the following steps:

1. Select the variants set
2. Double-click on the value and enter a new name
3. Press `enter` to apply

## Naming Variants Convention

```
<ComponentName>/<Viewport>/<Size>/<Variant>/<Style>/<State>

Button/Mobile/Large/Primary/Normal/Normal

```

## Colors

We use a color palette based on the primary and secondary colors of the brand to
maintain a consistency in every design system. Every color palette are decline
into shades and has dark and light variants to be applied in differents ways.

### Primary Colors

A primary color is the color most frequently used across a design system.

To optain the primary colors palette, we use the following steps:

1. Start with the primary color of the brand
2. Create shades with Color Compass plugin, find the darkest color that is
   usable (around 10-20 lightness)

### Accent Colors

An accent color is the color used to accent a design system.

To optain the accent colors palette, we use the following steps:

1. Start with the secondary color of the brand
2. Create shades with the Color Compass plugin, find the darkest color that is
   usable (around 10-20 lightness)
3. Do the same steps for every accent colors

### Grayscale

To optain the greyscale colors palette, we use the following steps:

1. Start with the black color
2. Create shades with the Color Compass plugin, from black to white

### Utility Colors

Utility colors are colors meanful to reflect a status, red for errors, green for
success and yellow for warning.

## Naming Colors Convention

```
<ThemeColor>/<CompanyName>/<VariantColor>/<ShadesNumber>

Light/Newrade/Primary/100

```

# Typography

## Typefaces

## Headlines

## Naming Headlines Convention

## Paragraphs

## Naming Paragraphs Convention

```
<Type>/<Variant>/<Viewport>/<Size>

Paragraph/Sans/Desktop/Large

```

## Links

## Naming Links Convention

```
<Type>/<Viewport>/<Size>/<Style>

Label/Mobile/Small/Bold

```

## Labels

## Naming Labels Convention

```
<Type>/<Viewport>/<Size>/<Style>

Label/Mobile/Small/Bold

```
