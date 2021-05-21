import { AppError, ERROR_TYPE } from '@newrade/core-common';
import { log, LOG_LEVEL } from '@newrade/core-utils';
import { GatsbyNode } from 'gatsby';
import path from 'path';
import { GatsbyNodeSiteMetadataFragment } from '../../../config/site-graphql-types';
import { GatsbyDSCorePluginOptions } from '../gatsby-plugin-options';

let siteMetadata: GatsbyNodeSiteMetadataFragment;

export const createPagesFunction: GatsbyNode['createPages'] = async (
  { actions, graphql },
  options
) => {
  const { createPage, deletePage } = actions;
  const pluginOptions = (options as unknown) as GatsbyDSCorePluginOptions;

  try {
    const markdownTemplate = path.resolve(`src/templates/markdown.template.tsx`);

    // createPage<GatsbyDesignSystemPageContext>({
    //   path,
    //   context: {
    //     siteMetadata,
    //   },
    //   component: markdownTemplate,
    // });
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
