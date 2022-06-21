import path from 'path';

import { GatsbyNode } from 'gatsby';

import { AppError, ERROR_TYPE } from '@newrade/core-common';

import { GatsbyPluginLayoutCoreOptions } from './gatsby-plugin-options.js';

let didRunAlready = false;
let absoluteLayoutComponentPath: string | undefined;
let absoluteProvidersComponentPath: string | undefined;

export const onPreInit: GatsbyNode['onPreInit'] = ({ store }, options) => {
  const pluginOptions = options as unknown as GatsbyPluginLayoutCoreOptions;

  if (didRunAlready) {
    throw new Error(
      `You can only have single instance of gatsby-plugin-core-layout in your gatsby-config.js`
    );
  }

  if (!pluginOptions.layoutComponentPath) {
    throw new AppError({
      name: ERROR_TYPE.GATSBY_ERROR,
      message: `Please set layoutComponentPath`,
    });
  }

  if (!pluginOptions.providersComponentPath) {
    throw new AppError({
      name: ERROR_TYPE.GATSBY_ERROR,
      message: `Please set providersComponentPath`,
    });
  }

  absoluteLayoutComponentPath = path.join(
    store.getState().program.directory,
    pluginOptions.layoutComponentPath
  );
  absoluteProvidersComponentPath = path.join(
    store.getState().program.directory,
    pluginOptions.providersComponentPath
  );

  didRunAlready = true;
};

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
  actions,
  plugins,
}) => {
  actions.setWebpackConfig({
    plugins: [
      plugins.define({
        CORE_LAYOUT_COMPONENT_PATH: JSON.stringify(absoluteLayoutComponentPath),
        CORE_PROVIDERS_COMPONENT_PATH: JSON.stringify(absoluteProvidersComponentPath),
      }),
    ],
  });
};
