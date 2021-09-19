import { GatsbyNode } from 'gatsby';
import { GatsbyCorePluginOptions } from '../gatsby-plugin-options';

export const createSchemaCustomizationFn: GatsbyNode['createSchemaCustomization'] = (
  { actions },
  options
) => {
  const pluginOptions = options as unknown as GatsbyCorePluginOptions;
  const { createTypes } = actions;

  /**
   * Create custom fields on SitePageContext
   * @see site-mdx-frontmatter.ts
   * @see page-context.ts
   */
  const typeDefs = `
    type SitePageContext implements Node @dontInfer {
      id: String
      siteMetadata: SitePageMetadata
      name: String
      fileId: String
      sourceInstance: String
      displayName: String
      locale: String
      layout: String
      template: String
      frontmatter: MdxFrontmatter
      absolutePath: String
      alternateLocales: [SitePageAlternateLocale]
      relativePath: String
    }

    type SitePageAlternateLocale {
      locale: String
      path: String
    }

    type SitePageMetadata {
      title: String
      description: String
      siteEnv: String
      siteUrl: String
      siteRepositoryUrl: String
      languages: SiteLanguages
    }

    type SiteLanguages {
      defaultLangKey: String
      langs: [String]
    }

    type MdxFrontmatter {
      title: String
      subject: String
      tags: [String]
      description: String
      version: String
      published: String
      status: String
      slug: String
      deprecated: String
      editPageUrl: String
      nextPageLabel: String
      nextPageUrl: String
      componentStatus: String
      componentVersion: String
      componentTests: String
    }
  `;

  createTypes(typeDefs);

  /**
   * Create childMdx prop for File
   * @see https://www.gatsbyjs.com/docs/reference/graphql-data-layer/schema-customization/#defining-child-relations
   */
  const fileTypeDefs = `
     type Mdx implements Node @childOf(types: ["File", "Markdown"]) {
      id: ID!
    }
   `;

  createTypes(fileTypeDefs);
};
