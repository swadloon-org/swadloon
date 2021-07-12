import Gatsby from 'gatsby';
import GatsbyPluginType from 'gatsby-plugin-typegen/types';

interface PluginOptions {
  fileName?: string;
  /**
   * @deprecated not used with `gatsby-plugin-typegen`
   */
  documentPaths: string[];
}

const defaultOptions: PluginOptions = {
  fileName: `types/graphql-types.ts`,
  documentPaths: [
    '../core-gatsby-ui/src/**/*.{ts,tsx}',
    './gatsby-*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './src/**/*.{js,jsx}',
  ],
};

/**
 * Return a `gatsby-plugin-ts` and `gatsby-plugin-typegen` configuration objects
 * @see https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-typescript
 * @see https://github.com/cometkim/gatsby-plugin-typegen
 */
export function getGatsbyPluginTypeScriptConfig({
  fileName = defaultOptions.fileName,
  documentPaths = defaultOptions.documentPaths,
}: PluginOptions = defaultOptions): Gatsby.PluginRef[] {
  const options: GatsbyPluginType.PluginOptions = {
    outputPath: fileName,
  };

  return [
    // {
    //   resolve: `gatsby-plugin-typescript`,
    //   options: {
    //     isTSX: true, // defaults to false
    //     jsxPragma: `jsx`, // defaults to "React"
    //     allExtensions: true, // defaults to false
    //   },
    // },
    {
      resolve: `gatsby-plugin-typegen`,
      options,
    },
  ];
}
