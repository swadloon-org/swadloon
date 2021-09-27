import { AppError, ERROR_TYPE, SITE_LANGUAGES } from '@newrade/core-common';
import fsp from 'fs/promises';
import { GatsbyNode } from 'gatsby';
import path from 'path';
import {
  GatsbyContentfulPageContext,
  GatsbyPageAlternateLocale,
} from '../../../config/page-context';
import {
  GatsbyNodeAllSiteQuery,
  GatsbyNodeSiteMetadataFragment,
} from '../../../config/site-graphql-types';
import { getLangSimpleCode } from '../../../utils/pages.utilities';
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
        siteVersion
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

    const contentfulPageNodes = pagesData.data?.allContentfulPage.nodes;

    if (!contentfulPageNodes?.length) {
      reporter.panic(`[${pluginOptions.pluginName}] could not retrieve pages`);
      return;
    }

    reporter.info(`[${pluginOptions.pluginName}] found ${contentfulPageNodes.length} pages`);

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

    contentfulPageNodes.forEach((node, index) => {
      reporter.info(`[${pluginOptions.pluginName}] creating page: ${node.slug}`);

      const pagesInOtherLocales: GatsbyPageAlternateLocale[] = contentfulPageNodes
        ?.filter(
          (matchinPage) =>
            matchinPage.name === node.name && // name must match
            (matchinPage.node_locale !== node.node_locale || // locale must be different
              getLangSimpleCode(matchinPage.node_locale) !== getLangSimpleCode(node.node_locale))
        )
        .map((node) => ({
          locale: node.node_locale as SITE_LANGUAGES,
          path: node.slug,
        }));

      if (pagesInOtherLocales?.length) {
        reporter.info(
          `[${pluginOptions.pluginName}] page ${
            node.slug
          } has alternate locales: ${pagesInOtherLocales?.map((page) => page.path)}`
        );
      }

      createPage<GatsbyContentfulPageContext>({
        path: node.slug,
        context: {
          siteMetadata,
          pageId: node.id,
          id: node.id,
          name: node.name,
          slug: node.slug,
          locale: node.node_locale as SITE_LANGUAGES,
          alternateLocales: pagesInOtherLocales,
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
