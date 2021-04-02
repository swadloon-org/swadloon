import * as t from 'io-ts';
/**
 * Local, typed representation of the .env file.
 */
export declare const Env: t.IntersectionC<[t.IntersectionC<[t.TypeC<{
    NODE_ENV: t.KeyofC<{
        development: import("../../core-common/lib").NODE_ENV; /**
         * Contentful variables
         */
        test: import("../../core-common/lib").NODE_ENV;
        production: import("../../core-common/lib").NODE_ENV;
    }>;
    NVM_NODE_VERSION: t.StringC;
    MASTER_GIT_HOST: t.StringC;
    MASTER_REPO_ORG: t.StringC;
    MASTER_REPO_NAME: t.StringC;
    PROJECT_GIT_HOST: t.StringC;
    PROJECT_REPO_ORG: t.StringC;
    PROJECT_REPO_NAME: t.StringC;
    APP_ENV: t.KeyofC<{
        local: import("../../core-common/lib").DEPLOY_ENV;
        dev: import("../../core-common/lib").DEPLOY_ENV;
        staging: import("../../core-common/lib").DEPLOY_ENV;
        production: import("../../core-common/lib").DEPLOY_ENV;
    }>;
    APP_URL: t.StringC;
    APP_PORT: t.StringC;
}>, t.PartialC<{
    GATSBY_ENABLE_INCREMENTAL_BUILD: t.KeyofC<{
        true: string;
        false: string;
    }>;
    GATSBY_PRESERVE_WEBPACK_CACHE: t.KeyofC<{
        true: string;
        false: string;
    }>;
    GATSBY_PRESERVE_FILE_DOWNLOAD_CACHE: t.KeyofC<{
        true: string;
        false: string;
    }>;
    GATSBY_QUERY_ON_DEMAND: t.KeyofC<{
        true: string;
        false: string;
    }>;
    GATSBY_LAZY_IMAGES: t.KeyofC<{
        true: string;
        false: string;
    }>;
    GATSBY_PARALLEL_SOURCING: t.KeyofC<{
        true: string;
        false: string;
    }>;
    GATSBY_DEV_SSR: t.KeyofC<{
        true: string;
        false: string;
    }>;
    GATSBY_FAST_DEV: t.KeyofC<{
        true: string;
        false: string;
    }>;
    GATSBY_FAST_REFRESH: t.KeyofC<{
        true: string;
        false: string;
    }>;
    ENABLE_GATSBY_REFRESH_ENDPOINT: t.KeyofC<{
        true: string;
        false: string;
    }>;
}>, t.PartialC<{
    TEST_PROTOCOL: t.KeyofC<{
        http: string;
        https: string;
    }>;
    /**
     * Figma
     */
    TEST_HOST: t.StringC;
    TEST_PORT: t.StringC;
    TEST_IGNORE_SSL_ERROR: t.KeyofC<{
        true: string;
        false: string;
    }>;
    TEST_CHROME_HEADLESS: t.KeyofC<{
        true: string;
        false: string;
    }>;
    TEST_VIEW_HEIGHT: t.StringC;
    TEST_VIEW_WIDTH: t.StringC;
}>]>, t.PartialC<{
    /**
     * Figma
     */
    FIGMA_TOKEN: t.StringC;
    FIGMA_FILE: t.StringC;
    /**
     * Contentful variables
     */
    CONTENTFUL_MANAGEMENT_TOKEN_NEWRADE: t.StringC;
}>, t.TypeC<{
    /**
     * Contentful variables
     */
    CONTENTFUL_ENV: t.StringC;
    CONTENTFUL_SPACEID_NEWRADE: t.StringC;
    CONTENTFUL_DELIVERY_TOKEN_NEWRADE: t.StringC;
}>]>;
export declare type ENV = t.TypeOf<typeof Env>;
