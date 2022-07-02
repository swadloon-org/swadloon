import * as t from 'io-ts';
/**
 * Local, typed representation of the .env file for core-css-extractor options
 */
export declare const Env: t.IntersectionC<[t.PartialC<{
    NODE_ENV: t.KeyofC<{
        development: import("@newrade/core-common").NODE_ENV;
        test: import("@newrade/core-common").NODE_ENV;
        production: import("@newrade/core-common").NODE_ENV;
    }>;
    NODE_DEBUG: t.StringC;
    NODE_OPTIONS: t.StringC;
    NODE_NO_WARNINGS: t.StringC;
    DEBUG: t.StringC;
}>, t.TypeC<{
    /**
     * Glob expression to find styles entries
     *
     * @example ENTRIES_GLOB=src/*.css.ts
     */
    CSS_EXTRACTOR_ENTRIES_GLOB: t.StringC;
    /**
     * Output path for files
     *
     * @example OUTPUT_PATH=dist/css-tokens
     */
    CSS_EXTRACTOR_OUTPUT_PATH: t.StringC;
}>]>;
export declare type ENV = t.TypeOf<typeof Env>;
