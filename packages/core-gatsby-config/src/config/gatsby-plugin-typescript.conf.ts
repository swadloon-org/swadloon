import Gatsby from 'gatsby';

interface PluginOptions {
  fileName?: string;
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
 * Return a `gatsby-plugin-ts` and `gatsby-plugin-graphql-codegen` configuration objects
 * @see https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-typescript
 * @see https://github.com/d4rekanguok/gatsby-typescript
 */
export function getGatsbyPluginTypeScriptConfig({
  fileName = defaultOptions.fileName,
  documentPaths = defaultOptions.documentPaths,
}: PluginOptions = defaultOptions): Gatsby.PluginRef[] {
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
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        fileName,
        documentPaths,
      },
    },
  ];
}
