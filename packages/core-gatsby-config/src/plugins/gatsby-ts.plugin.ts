import { Options as ForkTsPluginOptions } from 'fork-ts-checker-webpack-plugin';
import Gatsby from 'gatsby';
import * as tsloader from 'ts-loader';

export interface TsOptions {
  fileName?: string;
  tsLoader?: Partial<tsloader.Options>;
  typeCheck?: boolean;
  alwaysCheck?: boolean;
  forkTsCheckerPlugin?: ForkTsPluginOptions;
}

/**
 * Return a `gatsby-plugin-ts` configuration object.
 * @see https://www.gatsbyjs.com/plugins/gatsby-plugin-ts/
 */
export function getGatsbyTsPluginConfig(
  { fileName, tsLoader, typeCheck, alwaysCheck, forkTsCheckerPlugin }: TsOptions = {
    fileName: `types/graphql-types.ts`,
    tsLoader: {
      configFile: 'tsconfig.build.json',
      logLevel: 'WARN',
      projectReferences: false, // todo check if it works for development
    },
  }
): Gatsby.PluginRef {
  return {
    resolve: `gatsby-plugin-ts`,
    options: {
      fileName,
      tsLoader,
      typeCheck,
      alwaysCheck,
      forkTsCheckerPlugin,
      failOnError: false,
      documentPaths: ['./src/**/*.{ts,tsx}'],
    },
  };
}
