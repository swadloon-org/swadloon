import { AppError, ERROR_TYPE } from '@newrade/core-common';
import { log, LOG_LEVEL } from '@newrade/core-utils';
import { kebab } from 'case';
import { GatsbyNode } from 'gatsby';
import path from 'path';
import { GatsbyMarkdownFilePageContext, GatsbySrcPageContext } from '../../../config/page-config';
import {
  GatsbyNodeAllSiteQuery,
  GatsbyNodeMarkdownFilesQuery,
  GatsbyNodeSiteMetadataFragment,
} from '../../../config/site-graphql-types';
import { SITE_LANGUAGES } from '../../../config/site-languages';
import { SOURCE_INSTANCE_NAME } from '../../../config/source-instances';
import { getDirNameFromRelativePath } from '../../../utils/dir-name.utilities';
import { GatsbyCorePluginOptions } from '../gatsby-plugin-options';

let siteMetadata: GatsbyNodeSiteMetadataFragment;

export const createPagesFunction: GatsbyNode['createPages'] = async ({ actions, graphql }, options) => {
  const { createPage, deletePage } = actions;
  const pluginOptions = (options as unknown) as GatsbyCorePluginOptions;

  try {
    /**
     * Query for site metadata
     */
    const allSiteData = await graphql<GatsbyNodeAllSiteQuery>(`
      query GatsbyNodeAllSite {
        site {
          siteMetadata {
            ...GatsbyNodeSiteMetadata
          }
        }
      }

      fragment GatsbyNodeSiteMetadata on SiteSiteMetadata {
        title
        description
        siteEnv
        siteUrl
        languages {
          langs
          defaultLangKey
        }
      }
    `);

    if (!allSiteData.data?.site?.siteMetadata) {
      throw new AppError({
        name: ERROR_TYPE.GATSBY_ERROR,
        message: `Could not retrieve siteMetadata`,
      });
    }

    siteMetadata = allSiteData.data.site.siteMetadata;

    if (pluginOptions.enableDocsPages) {
      /**
       * Query for mdx files in /docs/
       */
      const markdownFilesData = await graphql<GatsbyNodeMarkdownFilesQuery>(`
        query GatsbyNodeMarkdownFiles {
          allFile(filter: { sourceInstanceName: { eq: "PACKAGE_DOCS" }, ext: { in: [".md", ".mdx"] } }) {
            nodes {
              id
              name
              base
              ext
              dir
              absolutePath
              relativePath
              publicURL
              size
              sourceInstanceName
              childMdx {
                slug
                excerpt
                frontmatter {
                  name
                  tags
                  title
                }
              }
            }
          }
        }
      `);

      log(`Got ${markdownFilesData?.data?.allFile?.nodes?.length} files for markdown pages`, {
        toolName: pluginOptions.packageName,
      });

      /**
       * Organise files to create pages and paths
       */
      // const markdownTemplate = path.resolve(`../core-gatsby-ui/lib/templates/markdown.template.js`);
      const markdownTemplate = path.resolve(`../core-gatsby-ui/src/templates/markdown.template.tsx`);
      // const markdownTemplate = path.resolve(`src/templates/markdown.template.tsx`);

      /**
       * Create Markdown pages
       */
      markdownFilesData?.data?.allFile.nodes.forEach((node, index) => {
        const dir =
          node.sourceInstanceName === SOURCE_INSTANCE_NAME.MDX_PAGES
            ? ``
            : `${node.sourceInstanceName ? `${kebab(node.sourceInstanceName)}/` : ''}`;
        const path = `${dir}${node.childMdx?.slug}`;
        const locale = /fr\.+/.test(node.name) ? SITE_LANGUAGES.EN : SITE_LANGUAGES.FR;

        log(`Creating markdown page: ${path}`, {
          toolName: pluginOptions.packageName,
        });

        createPage<GatsbyMarkdownFilePageContext>({
          path,
          context: {
            siteMetadata,
            id: node.id,
            name: node.childMdx?.frontmatter?.name || node.name,
            dirName: getDirNameFromRelativePath(node.relativePath),
            fileId: node.id,
            layout: 'DOCS',
            locale,
          },
          component: markdownTemplate,
        });
      });
    }

    if (pluginOptions.enableDesignSystemPages) {
      /**
       * Create Design System pages
       */
      // const designSystemPageTemplate = path.resolve(`../core-gatsby-ui/lib/templates/src-page.template.js`);
      const designSystemPageTemplate = path.resolve(`src/templates/design-system-page.template.tsx`);
      const designSystemPagesData = await graphql<{
        allFile: { nodes: { id: string; name: string; absolutePath: string; relativePath: string }[] };
      }>(`
        query GatsbyNodeDesignSystemFiles {
          allFile(filter: { sourceInstanceName: { eq: "DESIGN_SYSTEM_DOCS" }, name: { glob: "*.page" } }) {
            nodes {
              id
              name
              absolutePath
              relativePath
            }
          }
        }
      `);
      designSystemPagesData?.data?.allFile.nodes.forEach((node, index) => {
        const dir = `design-system/${node.relativePath.replace(/\/(.+)/, '/').replace(`${node.name}.tsx`, '')}`;
        const formattedName = kebab(node.name.replace('.page', '').replace('home', ''));
        const path = `${dir}${formattedName}`;

        log(`Creating design system page: ${path}`, {
          toolName: pluginOptions.packageName,
        });

        createPage<GatsbySrcPageContext>({
          path,
          context: {
            siteMetadata,
            id: node.id,
            name: node.name,
            dirName: getDirNameFromRelativePath(node.relativePath),
            fileId: node.id,
            layout: 'DESIGN_SYSTEM',
            locale: SITE_LANGUAGES.EN,
          },
          component: node.absolutePath,
        });
      });
    }
  } catch (error) {
    log(`Error occured when generating pages: ${error}`, {
      toolName: pluginOptions.packageName,
      level: LOG_LEVEL.ERROR,
    });
    if (error) {
      throw new AppError({
        name: ERROR_TYPE.GATSBY_ERROR,
        message: error,
      });
    }
  }
};

// export const onCreatePageFunction: GatsbyNode['onCreatePage'] = ({ page, actions }, options) => {
//   const pluginOptions = (options as unknown) as GatsbyCorePluginOptions;
//   let updatedPath = page.path;
//   const { createPage, deletePage } = actions;
//   const { frontmatter } = page.context as any;
//   const markdownTemplate = path.resolve(`src/templates/markdown.template.tsx`);

//   /**
//    * Process Markdown pages
//    */
//   if (frontmatter) {
//     if (/\/docs/g.test(page.component)) {
//       updatedPath = `docs${page.path}`.replace('&', 'and');
//     }

//     const slugWithoutSlash = page.path.replace(/(^\/)/, '');
//     const slug = slugWithoutSlash.replace(/(\/)$/, '').replace('&', 'and');

//     log(`Recreating page: ${updatedPath}, slug: ${slug}`, {
//       toolName: pluginOptions.packageName,
//       level: LOG_LEVEL.INFO,
//     });

//     deletePage(page);

//     createPage<GatsbyMarkdownFilePageContext>({
//       path: updatedPath,
//       component: markdownTemplate,
//       context: {
//         ...page.context,
//         siteMetadata,
//         slug,
//         id: slug,
//         name: frontmatter?.name ? frontmatter.name : slug,
//         locale: SITE_LANGUAGES.EN,
//         layout: 'SITE',
//       },
//     });
//     return;
//   }

//   log(`Recreating page: ${updatedPath}`, {
//     toolName: pluginOptions.packageName,
//     level: LOG_LEVEL.INFO,
//   });

//   deletePage(page);

//   const existingContext =

//   createPage<GatsbySrcPageContext>({
//     ...page,
//     path: updatedPath,
//     context: {
//       ...page.context,
//       siteMetadata,
//       fileId: '',
//       id: updatedPath,
//       name: updatedPath,
//       locale: SITE_LANGUAGES.EN,
//       layout: page.,
//     },
//   });
// };

// export const onCreateNodeFunction: GatsbyNode['onCreateNode'] = ({ node, actions, getNode }, options) => {
//   const pluginOptions = (options as unknown) as GatsbyCorePluginOptions;
//   const { createNodeField } = actions;

//   if (node && node.context && (node.context as any).frontmatter && (node.context as any).slug) {
//     const slug = (node.context as any).slug;
//     const updatedSlug = slug.replace('docs/', '');
//     log(`Updating node: ${node.id}`, {
//       toolName: pluginOptions.packageName,
//       level: LOG_LEVEL.INFO,
//     });
//     createNodeField({
//       name: 'slug',
//       node,
//       value: updatedSlug,
//     });
//   }
// };
