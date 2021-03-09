# Gatsby

## Overview

## Generating Pages with `gatsby-plugin-core` and `gatsby-plugin-core-contentful`

We have two gatsby plugin that handle page creation.

### Page API

There are many way to create pages, we support `.tsx`, `.mdx` and also sourcing pages from external CMSes.

| Id  | Source         | Description                                  | Location               | Example               |
| --- | -------------- | -------------------------------------------- | ---------------------- | --------------------- |
| 1   | Src pages      | .tsx files                                   | `/src/pages/**/*.tsx`  | `/src/pages/404.tsx`  |
| 2   | Markdown pages | .mdx? files                                  | `/src/pages/**/*.mdx?` | `/src/pages/404.mdx`  |
| 3   | Markdown docs  | .mdx? files                                  | `/src/docs/**/*.mdx?`  | `/src/docs/readme.md` |
| 4   | CMS pages      | pages that are created using an external CMS | Online                 | Contentful page       |

#### Localization

Pages can be created in different locales.

The convention is to start the file names with the locale followed by a dot.

`src/docs/fr.readme.mdx` will create a page

The Page model has the following properties:

| Prop          | Type          | Required |
| ------------- | ------------- | -------: |
| col 3 is      | right-aligned |        3 |
| col 2 is      | centered      |        2 |
| zebra stripes | are neat      |        1 |

### Section API

### Page `path`

If the website's defautlLang is EN

| Page Path               | Url            |
| ----------------------- | -------------- |
| src/docs/en.markdown.md | /docs/markdown |

```
src/docs/en.markdown.mdx /docs/markdown
src/docs/index.md /docs/
src/docs/readme.md /docs/readme
src/docs/fr.markdown.mdx /docs/markdown
src/docs/fr.markdown.mdx /fr/docs/markdown
src/pages/fr.page.mdx /fr/page
src/pages/en.page.mdx /page
src/pages/en.contact.mdx /contact
src/pages/fr.contact.mdx /fr/contact
src/pages/page.mdx /page
src/pages/index.tsx /
src/pages/design-system/home.tsx /design-system/home
src/pages/design-system/index.tsx /design-system/index
src/pages/design-system/component/button.tsx /design-system/component/button
src/pages/design-system/component/button.mdx /design-system/component/button
```

## Config

### Setup

Add the plugin in `gatsby-config.ts`:

```tsx
# gastby-config.ts
export default = {
  siteMetadata: {
    title: `VSB Website`,
    description: `Dr. Boucher Clinic's website`,
    siteUrl: env.APP_URL,
    siteEnv: env.APP_ENV,
    languages: {
      langs: [common.SITE_LANGUAGES.FR],
      defaultLangKey: common.SITE_LANGUAGES.FR,
    },
  },
  plugins: [
    // ... other plugins
    {
      resolve: path.resolve(__dirname, `../../lib/plugins/gatsby-plugin-core`),
      options: {
        {
          packageName: 'my-website',
          // enable or disable certain features
          features: {
            renderDesignSystemPages: true,
            renderDocsPages: true,
          },
        }
      },
    },
    {
      resolve: path.resolve(__dirname, `../../lib/plugins/gatsby-plugin-core-contentful`),
      options: {
        packageName: 'my-website',
        // set locale to render for contentful pages
        locales: ['fr-CA', 'en-CA'],
        // enable or disable certain features
        features: {
          renderPages: true,
          renderBlogPosts: true,
          renderPortfolio: true,
        },
      },
    }
  ]
}

```

## Other Plugins

https://github.com/timhagn/gatsby-background-image
https://github.com/timhagn/gatsby-background-image/tree/master/packages/gatsby-background-image#how-to-use-with-art-direction-support
https://www.gatsbyjs.com/docs/loading-plugins-from-your-local-plugins-folder/

## Resources

https://mcro.tech/gatsby-image-sharp/
