import { NODE_ENV } from '@newrade/core-env';
import { ForkTsCheckerWebpackPluginOptions } from 'fork-ts-checker-webpack-plugin/lib/ForkTsCheckerWebpackPluginOptions';
import Gatsby from 'gatsby';
import * as TSLoader from 'ts-loader';

export interface TsOptions {
  fileName?: string;
  tsLoader?: Partial<TSLoader.Options>;
  typeCheck?: boolean;
  /**
   * Throw error if the codegen fails. By default only apply to production builds.
   */
  failOnError?: boolean;
  forkTsCheckerPlugin?: ForkTsCheckerWebpackPluginOptions;
}

const defaultOptions: TsOptions = {
  fileName: `types/graphql-types.ts`,
  tsLoader: {
    configFile: 'tsconfig.build.json',
    logLevel: 'WARN',
    transpileOnly: true, // typechecking will be done by ForkTsCheckerWebpackPlugin
    projectReferences: false, // todo check if it works for development
  },
  typeCheck: process.env.NODE_ENV === NODE_ENV.PRODUCTION,
  forkTsCheckerPlugin: {},
  failOnError: process.env.NODE_ENV === NODE_ENV.PRODUCTION,
};

/**
 * Return a `gatsby-plugin-ts` configuration object.
 * @see https://www.gatsbyjs.com/plugins/gatsby-plugin-ts/
 */
export function getGatsbyTsPluginConfig({
  fileName = defaultOptions.fileName,
  tsLoader = defaultOptions.tsLoader,
  typeCheck = defaultOptions.typeCheck,
  forkTsCheckerPlugin = defaultOptions.forkTsCheckerPlugin,
  failOnError = defaultOptions.failOnError,
}: TsOptions = defaultOptions): Gatsby.PluginRef {
  return {
    resolve: `gatsby-plugin-ts`,
    options: {
      fileName,
      tsLoader,
      typeCheck,
      forkTsCheckerPlugin,
      failOnError,
      documentPaths: ['./src/**/*.{ts,tsx}', './gatsby-*.{ts,tsx}'],
    },
  };
}
