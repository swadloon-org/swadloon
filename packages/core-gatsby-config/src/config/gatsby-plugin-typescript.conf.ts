import Gatsby from 'gatsby';
import GatsbyPluginType from 'gatsby-plugin-typegen/types';

interface PluginOptions {
  fileName?: string;
}

const defaultOptions: PluginOptions = {
  fileName: `types/graphql-types.ts`,
};

/**
 * Return a `gatsby-plugin-typegen` configuration object
 * @see https://github.com/cometkim/gatsby-plugin-typegen
 */
export function getGatsbyPluginTypeScriptConfig({
  fileName = defaultOptions.fileName,
}: PluginOptions = defaultOptions): Gatsby.PluginRef[] {
  const options: GatsbyPluginType.PluginOptions = {
    outputPath: fileName,
  };

  return [
    {
      resolve: `gatsby-plugin-typegen`,
      options,
    },
  ];
}
