# Change Log

All general changes to the repo or main dependencies will be documented in this
file. This files is written manually where as other changelogs in `/packages/`
are automated.

# 2021 July Update - #3 - (2021-07-xx)

## Todos

- [ ] refactor desktop-navbar-\* components as navbar-\*
- [ ] all component should have a line height set

## Fixes

## Features

# 2021 July Update - #2 - (2021-07-18)

## Breaking changes

- Remove old `<NavBar/>` component
- Renamed `<NavItem/>` component to `<SidebarItem/>`
- Renamed `<NavItemGroup/>` component to `<SidebarItemGroup/>`
- Renamed `<TagStatus/>` component to `<Badge/>`
- `frontmatter?.name` is now `frontmatter?.title`
- removed the following components from `core-gatsby-ui` index:

```ts
export * from './docs-components/color-palette';
export * from './docs-components/color-swatch-dark';
export * from './docs-components/font-showcase';
export * from './docs-components/icon-box';
export * from './docs-components/icons';
export * from './docs-components/logo-placeholder';
export * from './docs-components/loren-ipsum';
export * from './docs-components/page-header';
export * from './docs-components/placeholder';
export * from './docs-components/placeholder-markdown';
export * from './docs-components/reversed-box';
export * from './docs-components/scale-steps';
export * from './docs-components/shadow-swatch';
export * from './layout/design-system-lazy.layout';
export * from './layout/docs-lazy.layout';
export * from './mdx/docs-mdx-components';
```

- removed `config/gatsby-plugin-sharp.conf.ts (git)`
- removed gatsby-plugin-pages.conf.ts (no longer needed)
- updated plugin

```ts
    ...core.getGastbyCorePluginConfig({
      packageName: packageJson.name,
    }),
```

## Fixes

- Consume core-react-ui with /src/ intead of compiled lib because of issues with
  Treat and Vanilla-Extract (see
  [issue](https://github.com/seek-oss/vanilla-extract/issues/231))

## Features

- Added SidebarAPI
- Added LinkRenderer
- Added SidebarRenderer
- New hook to update the document background color `useUpdateDocumentColor()`

# 2021 July Update - #1 - (2021-07-08)

## Breaking changes

### Webpack

- **webpack:** upgrade to webpack v5 ()

rename import `webpack/declarations/WebpackOptions` to `webpack`

change import `import { WebpackOptions } from 'webpack';` to

`import { Configuration } from 'webpack';`

### Gatsby

replaced https://github.com/Js-Brecht/gatsby-plugin-ts-config with
https://github.com/cometkim/gatsby-plugin-typegen/tree/master/plugin

remove gatsby from .env

use

````

flags: core.gatsbySiteFlags,

```

instead.
```
````
