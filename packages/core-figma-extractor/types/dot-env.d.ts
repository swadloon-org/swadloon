import * as t from 'io-ts';
/**
 * Local, typed representation of the .env file.
 */
export declare const Env: t.IntersectionC<[t.TypeC<{}>, t.TypeC<{
    /**
     * Figma
     */
    FIGMA_TOKEN: t.StringC;
    FIGMA_FILE: t.StringC;
}>]>;
export declare type ENV = t.TypeOf<typeof Env>;
