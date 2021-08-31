import { AppError, ERROR_TYPE, SITE_LANGUAGES } from '@newrade/core-common';
import fsp from 'fs/promises';
import { GatsbyNode } from 'gatsby';
import path from 'path';
import { GatsbyContentfulPageContext } from '../../../config/page-context';
import {
  GatsbyNodeAllSiteQuery,
  GatsbyNodeSiteMetadataFragment,
} from '../../../config/site-graphql-types';
import { GatsbyCoreContentfulPluginOptions } from '../gatsby-plugin-options';

let siteMetadata: GatsbyNodeSiteMetadataFragment;

export const createPagesFunction: GatsbyNode['createPages'] = async (
  { actions, graphql, reporter },
  options
) => {
  const { createPage } = actions;
  const pluginOptions = options as unknown as GatsbyCoreContentfulPluginOptions;

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

    reporter.info(
      `[${pluginOptions.pluginName}] creating pages for locales ${pluginOptions.locales}`
    );

    const pagesData = await graphql<{
      allContentfulPage: {
        nodes: {
          node_locale: string;
          id: string;
          name: string;
          slug: string;
        }[];
      };
    }>(
      `
        query GatsbyContentfulPages($locales: [String]) {
          allContentfulPage(filter: { node_locale: { in: $locales } }) {
            nodes {
              node_locale
              id
              name
              slug
            }
          }
        }
      `,
      {
        locales: pluginOptions.locales,
      }
    );

    if (!pagesData.data?.allContentfulPage.nodes.length) {
      reporter.panic(`[${pluginOptions.pluginName}] could not retrieve pages`);
    }

    reporter.info(
      `[${pluginOptions.pluginName}] found ${pagesData.data?.allContentfulPage.nodes.length} pages`
    );

    /**
     * Automatically create pages based on the Page Collection in Contentful
     */
    let pageTemplate: string;
    try {
      await fsp.readFile(`src/templates/contentful-page.template.tsx`);
      reporter.info(`[${pluginOptions.pluginName}] found contentful-page template in package`);
      pageTemplate = path.resolve(`src/templates/contentful-page.template.tsx`);
    } catch (error: any) {
      reporter.panic(
        `[${pluginOptions.pluginName}] no template defined for contentful-page in package`
      );
    }

    // try {
    //   await fsp.readFile(`../core-gatsby-ui/src/templates/contentful-page.template.tsx`);
    //   reporter.info(`[${pluginOptions.pluginName}] using default contentful-page template`);
    //   pageTemplate = path.resolve(`../core-gatsby-ui/contentful-page.template.tsx`);
    // } catch (error: any) {
    //   reporter.panic(`[${pluginOptions.pluginName}] no default template defined for contentful-page`);
    // }

    pagesData.data?.allContentfulPage.nodes.forEach((node, index) => {
      reporter.info(`[${pluginOptions.pluginName}] creating page: ${node.slug}`);

      createPage<GatsbyContentfulPageContext>({
        path: node.slug,
        context: {
          siteMetadata,
          pageId: node.id,
          id: node.id,
          name: node.name,
          slug: node.slug,
          locale: node.node_locale as SITE_LANGUAGES,
          layout: 'default',
          template: 'contentfulPage',
          absolutePath: '',
          relativePath: '',
        },
        component: pageTemplate,
      });
    });
  } catch (error: any) {
    reporter.error(`[${pluginOptions.pluginName}] error occured when generating pages: ${error}`);
    reporter.panic(error);
  }
};
