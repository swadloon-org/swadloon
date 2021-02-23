import { AppError, ERROR_TYPE } from '@newrade/core-common';
import { GatsbyNode } from 'gatsby';
import path from 'path';
import { GatsbyContentfulPageContext } from '../../../config/page-config';
import { PAGE_LAYOUT, PAGE_TEMPLATE } from '../../../config/page.props';
import { GatsbyNodeAllSiteQuery, GatsbyNodeSiteMetadataFragment } from '../../../config/site-graphql-types';
import { SITE_LANGUAGES } from '../../../config/site-languages';
import { GatsbyCoreContentfulPluginOptions } from '../gatsby-plugin-options';

let siteMetadata: GatsbyNodeSiteMetadataFragment;

export const createPagesFunction: GatsbyNode['createPages'] = async ({ actions, graphql, reporter }, options) => {
  const { createPage } = actions;
  const pluginOptions = (options as unknown) as GatsbyCoreContentfulPluginOptions;

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

    /**
     * Page creations contentful
     */

    reporter.info(`[${pluginOptions.pluginName}] creating pages for locales ${pluginOptions.locales}`);

    const pagesData = await graphql<{
      allContentfulPage: {
        edges: {
          node: {
            node_locale: string;
            id: string;
            name: string;
            slug: string;
            layout: PAGE_LAYOUT;
            template: PAGE_TEMPLATE;
          };
        }[];
      };
    }>(
      `
        query GatsbyContentfulPages($locales: [String]) {
          allContentfulPage(filter: { node_locale: { in: $locales } }) {
            edges {
              node {
                node_locale
                id
                name
                slug
                layout
                template
              }
            }
          }
        }
      `,
      {
        locales: pluginOptions.locales,
      }
    );

    reporter.info(`[${pluginOptions.pluginName}] found ${pagesData.data?.allContentfulPage.edges.length} pages`);

    if (pagesData.errors) {
      throw new Error('Error while retrieving pages');
    }

    /**
     * Automatically create pages based on the Page Collection in Contentful
     */
    const pageTemplate = path.resolve(`src/templates/contentful-page.template.tsx`);

    pagesData.data?.allContentfulPage.edges
      .filter((edge) => {
        if (!(edge && edge.node)) {
          return false;
        }

        return true;
      })
      .forEach((edge, index) => {
        reporter.info(`[${pluginOptions.pluginName}] creating page: ${edge.node.slug}`);

        createPage<GatsbyContentfulPageContext>({
          path: edge.node.slug,
          context: {
            siteMetadata,
            pageId: edge.node.id,
            id: edge.node.id,
            name: edge.node.name,
            slug: edge.node.slug,
            locale: edge.node.node_locale as SITE_LANGUAGES,
            layout: edge.node.layout || 'default',
            template: edge.node.template || 'default',
          },
          component: pageTemplate,
        });
      });
  } catch (error) {
    reporter.error(`[${pluginOptions.pluginName}] error occured when generating pages: ${error}`);

    reporter.panic(error);
  }
};
